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
// CONTROLS BUTTONS
let playerContainer = document.querySelector("#player-container");
let shuffleSongBtn = document.querySelector("#shuffle-song");
let prevSongBtn = document.querySelector("#prev-song");
let playSongBtn = document.querySelector("#play-song");
let nextSongBtn = document.querySelector("#next-song");
let repeatSongBtn = document.querySelector("#repeat-song");
let expandSongBtn = document.querySelector("#expand-song");
let darkModeBtn = document.querySelector("#dark-mode");
// BUTTONS STATES
let buttonDarkModeState = false;
let buttonShuffleState = false;
let buttonRepeatState = false;
let buttonExpandState = false;
// FOOTER
let footerContainer = document.getElementById("footer-container");
// INDEX = MUSIC NUMBER POSITION IN ARRAY
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
