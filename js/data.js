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
let shuffleSong = document.querySelector("#shuffle-song");
let prevSong = document.querySelector("#prev-song");
let playSong = document.querySelector("#play-song");
let nextSong = document.querySelector("#next-song");
let repeatSong = document.querySelector("#repeat-song");
let expandSong = document.querySelector("#expand-song");
// FOOTER
let footerContainer = document.getElementById("footer-container");

let darkMode = document.querySelector("#dark-mode");
let buttonDarkModeState = false;
let buttonShuffleState = false;
let buttonRepeatState = false;
let buttonExpandState = false;
let index = 0;

// SONGS DATA
const songList = [
    {
        title: "Passengers",
        autor: "chromonicci",
        src: "./assets/songs/Passengers.mp3",
        cover: "./assets/images/cover.jpg",
    },
    {
        title: "Sage",
        autor: "junior state",
        src: "./assets/songs/Sage.mp3",
        cover: "./assets/images/cover.jpg",
    },
    {
        title: "Hollow",
        autor: "Hanz",
        src: "./assets/songs/Hollow.mp3",
        cover: "./assets/images/cover.jpg",
    },
    {
        title: "New Space",
        autor: "chief.",
        src: "./assets/songs/new-space.mp3",
        cover: "./assets/images/cover.jpg",
    },
    {
        title: "Geode",
        autor: "Gemp, Sinnr",
        src: "./assets/songs/Geode.mp3",
        cover: "./assets/images/cover.jpg",
    },
    {
        title: "Reading Night",
        autor: "xander.",
        src: "./assets/songs/Reading-Night.mp3",
        cover: "./assets/images/cover.jpg",
    },
    {
        title: "In Circles",
        autor: "Tennyson",
        src: "./assets/songs/In-Circles.mp3",
        cover: "./assets/images/cover.jpg",
    },
    {
        title: "Swing",
        autor: "SwuM",
        src: "./assets/songs/Swing.mp3",
        cover: "./assets/images/cover.jpg",
    },
    {
        title: "Home Is Where My Heart Is",
        autor: "Kupla",
        src: "./assets/songs/Home-Is-Where.mp3",
        cover: "./assets/images/cover.jpg",
    },
    {
        title: "Iota",
        autor: "Laxcity",
        src: "./assets/songs/Iota.mp3",
        cover: "./assets/images/cover.jpg",
    },
];
