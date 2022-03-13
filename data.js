let html = document.querySelector("html");
// SONG
let song = document.querySelector("#song");
let songInfo = document.querySelector("#song-info");
let songs = document.getElementsByClassName("songs");
// COUNTER
let timerContainer = document.querySelector("#timer-container");
let songCurrentTime = document.querySelector("#song-current-time");
let songTotalTime = document.querySelector("#song-total-time");
let counterCurrentTime;
let counterTotalTime;
// PLAYLIST AND PROGRESS BAR
let playlistContainer = document.querySelector("#playlist-container");
let progressContainer = document.querySelector("#progress-container");
let progressBar = document.querySelector("#progress-bar");
let progressBarInput = document.querySelector("#progress-bar-input");
// CONTROLS
let playerContainer = document.querySelector("#player-container");
let prevSong = document.querySelector("#prev-song");
let playSong = document.querySelector("#play-song");
let nextSong = document.querySelector("#next-song");
let repeatSong = document.querySelector("#repeat-song");
let expandSong = document.querySelector("#expand-song");
// FOOTER
let footerContainer = document.getElementById("footer-container");

let darkMode = document.querySelector("#dark-mode");
let buttonDarkModeState = false;
let buttonRepeatState = false;
let buttonExpandState = false;
let index = 0;

// SONGS DATA
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
