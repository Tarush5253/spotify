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
let full_music = document.querySelector(".full-music");

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

music.addEventListener("click", function () {
    full_music.classList.toggle("dhikhja");
});
// const tracks = async () => {
//     // window.location.reload();
//     let data = await fetch(`https://v1.nocodeapi.com/tarush/spotify/ErcPzpuzgqDpQerL/search?q=${inp.value}&type=track`);
//     let cnvrtData = await data.json();


//     for (let i = 0; i < 20; i++) {

//         // console.log(cnvrtData.tracks.items[i]);

//         src = cnvrtData.tracks.items[i].album.images[1].url;

//         let card = document.createElement("div");

//         card.setAttribute('class', 'card');

//         let img = document.createElement("img");

//         let song = document.createElement("p");

//         let audio = document.createElement("audio");

//         audio.src = cnvrtData.tracks.items[i].preview_url;

//         audio.controls = true;

//         song.innerHTML = `<b>${cnvrtData.tracks.items[i].album.name} <b/><br> artist : ${cnvrtData.tracks.items[i].artists[0].name} <br> release date: ${cnvrtData.tracks.items[i].album.release_date}`;

//         img.src = src;

//         card.appendChild(img);
//         card.appendChild(song);
//         card.appendChild(audio);
//         container.appendChild(card);
//     }

// }






