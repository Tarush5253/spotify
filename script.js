let inp = document.querySelector("input");
let container = document.querySelector(".card-container");
let btn = document.querySelector(".get-data");
let home = document.querySelector(".nav-option");
let search = document.querySelector(".love");
let main_home = document.querySelector(".main-home");
let main_search = document.querySelector(".main-search");
let hamb = document.querySelector(".hamb");
let hamb_2 = document.querySelector(".hamb2");
let side_bar = document.querySelector(".sidebar");
let music = document.querySelector(".full-music-btn");
let currentSong = new Audio();
let play = document.querySelector(".play");
const volumeSlider = document.getElementById('volumeSlider');
// const navPlay = document.querySelectorAll('.nav-play');

function convertSecondsToMinutes(seconds) {
    if (typeof seconds !== 'number' || Number.isNaN(seconds)) {
        return '00:00';
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

home.addEventListener("click", function () {
    main_home.classList.add("display");
    main_search.classList.remove("display");
    side_bar.classList.remove("display_sidebar");
    main_home.classList.remove("chupja");
    main_search.classList.remove("chupja");
});
search.addEventListener("click", function () {
    main_home.classList.remove("display");
    main_search.classList.add("display");
    side_bar.classList.remove("display_sidebar");
    main_home.classList.remove("chupja");
    main_search.classList.remove("chupja");
});
hamb.addEventListener("click", function () {
    side_bar.classList.add("display_sidebar");
    main_home.classList.add("chupja");
    main_search.classList.add("chupja");
});
hamb_2.addEventListener("click", function () {
    side_bar.classList.add("display_sidebar");
    main_home.classList.add("chupja");
    main_search.classList.add("chupja");
});





function playMusic(track , pause = false){
    currentSong.src = "/songs/" + track;
    if(!pause){
        currentSong.play();
        play.src = "/assets/pause.svg";
        play.classList.add("invert");
        play.style.height = "2.5rem";
        play.style.border = "0px solid black";    
    }
    document.querySelector(".album").innerHTML = track;
    document.querySelector(".curr-time").innerHTML="00:00";
    document.querySelector(".tot-time").innerHTML="00:00";
    
}


document.addEventListener('DOMContentLoaded', (event) => {
    const songs = [
        'blue eyes.m4a',
        'Owls - Lish Grooves.mp3',
        'lover.m4a',
        'Serenity - Lish Grooves.mp3',
        'Smoke - Lish Grooves.mp3',
        'So Sweet - Lish Grooves.mp3',
        'The Rainy Road - Lish Grooves.mp3',
        // Add more song file names here
    ];

    function playMusic(track , pause = false){
        currentSong.src = "/songs/" + track;
        if(!pause){
            currentSong.play();
            play.src = "/assets/pause.svg";
            play.classList.add("invert");
            play.style.height = "2.5rem";
            play.style.border = "0px solid black";    
        }
        document.querySelector(".album").innerHTML = decodeURI(track);
        document.querySelector(".curr-time").innerHTML="00:00";
        document.querySelector(".tot-time").innerHTML="00:00";
        
    }


    playMusic(songs[0] , true);

    // show all the song in the playlist
    let songDiv = document.querySelector(".songs-container").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songDiv.innerHTML = songDiv.innerHTML + `
        <li>
                            <img src="./assets/musical-notes.svg">
                            <div class="info">
                                <div class="title">${song}</div>
                            </div>
                            <img src="./assets/player_icon3.png" class="nav-play">
        </li>`;
    } 

    //attach an eventlistener to each song
    Array.from(document.querySelector(".songs-container").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click",element=>{
            console.log(e.querySelector(".info").firstElementChild.innerHTML);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
        })
    });


    // attach an event listener to play , next and previous
    play.addEventListener("click",function(){
        if(currentSong.paused){
            currentSong.play();
            play.src = "/assets/pause.svg";
            play.classList.add("invert");
            play.style.height = "2.5rem";
            play.style.border = "0px solid black";

        }else{
            currentSong.pause();
            play.src = "/assets/player_icon3.png";
            play.classList.remove("invert");
            play.style.height = "2rem";
            play.style.border = "5px solid black";
        }
    });

    // listen for timeupdate event
    currentSong.addEventListener("timeupdate",()=>{
        document.querySelector(".curr-time").innerHTML=`${convertSecondsToMinutes(currentSong.currentTime)}`;
        document.querySelector(".tot-time").innerHTML=`${convertSecondsToMinutes(currentSong.duration)}`;

        document.querySelector(".progress-bar").value = (currentSong.currentTime / currentSong.duration)*100;
    });
    //listen for progressbar event
    document.querySelector(".progress-bar").addEventListener("input", (e)=>{
        currentSong.currentTime = (currentSong.duration * e.target.value) / 100;
    });
    //add event listener to previous song
    document.querySelector(".previous").addEventListener("click",function(){
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0].replaceAll("%20", " "));
         if((index-1) >= 0){
            currentSong.pause();
            playMusic(songs[index-1]);
         };
    });
    //add event listener to next song
    document.querySelector(".next").addEventListener("click",function(){
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0].replaceAll("%20", " "));
         if((index+1) < songs.length){
            currentSong.pause();
            playMusic(songs[index+1]);
         };
    });
    // Event listener for the volume slider
    volumeSlider.addEventListener('input', (e) => {
        currentSong.volume = e.target.value;
    });

});