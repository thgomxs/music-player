let song = document.querySelector("#song");
let songInfo = document.querySelector("#header-container");
let songs = document.getElementsByClassName("songs");

let timerContainer = document.querySelector("#timer-container");
let songCurrentTime = document.querySelector("#time-current");
let songTotalTime = document.querySelector("#time-total");
let counterCurrentTime;
let counterTotalTime;

let playlistContainer = document.querySelector("#playlist-container");

let progressBar = document.querySelector("#progress-bar");
let progressBarInput = document.querySelector("#input-progress-bar");

let prevSong = document.querySelector("#prev-song");
let playSong = document.querySelector("#play-song");
let nextSong = document.querySelector("#next-song");
let repeatSong = document.querySelector("#repeat-song");

let buttonRepeatState = false;
let index = 0;

let footerContainer = document.getElementById("footer-container");

const songList = [
    {
        title: "Keep My Spirit Alive",
        autor: "Kanye West",
        src: "./assets/audio.mp3",
        cover: "./assets/cover.jpg",
    },
    {
        title: "Jesus Lord",
        autor: "Kanye West",
        src: "./assets/audio2.mp3",
        cover: "./assets/cover.jpg",
    },
    {
        title: "Believe What I Say",
        autor: "Kanye West",
        src: "./assets/audio3.mp3",
        cover: "./assets/cover.jpg",
    },
];
