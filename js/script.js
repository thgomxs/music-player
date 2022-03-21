onload = function () {
    // ADD ALL SONGS CONTAINED IN SONG LIST ON DATA.JS
    for (let i = 0; i < songList.length; i++) {
        playlistContainer.innerHTML += `<section class="songs cent">

                                             <article class="song-info centColumn">
                                                <img src="${songList[i].cover}" class="song-cover" alt="playIcon">
                                                <h1 class="song-name">${songList[i].title}</h1>
                                                <p class="song-artist">${songList[i].autor}</p>
                                             </article>

                                             <audio class="audio" src="${songList[i].src}"></audio>
                                        </section>`;
    }
    // (FOR) WITH OBJECTIVE OF LOAD MUSIC SELECTED BY USER THROUGH THE FUNCTION (playSelectedSong)
    for (let s of songs) {
        s.addEventListener("click", playSelectedSong);
    }

    loadSong();
    startSongCounter();
    enableDarkMode();
};

// ENABLE AND DISABLE DARK MODE FUNCTION
function enableDarkMode() {
    if (buttonDarkModeState == false && window.matchMedia("(prefers-color-scheme: dark)").matches == true) {
        html.classList.add("dark-mode");
        buttonDarkModeState = true;
        darkModeBtn.innerHTML = "<p>Swap for</p> LIGHT MODE";
        return;
    }
    if (buttonDarkModeState == true) {
        html.classList.remove("dark-mode");
        buttonDarkModeState = false;
        darkModeBtn.innerHTML = "<p>Swap for</p> DARK MODE";
    }
}

// LOAD SONG INFORMATION
function loadSong() {
    song.src = songList[index].src;
    songInfo.children[0].src = songList[index].cover;
    songInfo.children[1].innerHTML = songList[index].title;
    songInfo.children[2].innerHTML = songList[index].autor;
}

// CONVERT SECONDS
function calcTime(value) {
    const secs = parseInt(value);
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor((secs - hours * 3600) / 60);
    let seconds = secs - hours * 3600 - minutes * 60;

    if (hours == 0) return minutes + ":" + (seconds >= 10 ? seconds : "0" + seconds);

    if (hours !== 0) return hours + ":" + (minutes >= 10 ? minutes : "0" + minutes) + ":" + (seconds >= 10 ? seconds : "0" + seconds);
}
// START COUNTER OF SONG DURATION
function startSongCounter() {
    counterTotalTime = setInterval(function () {
        songTotalTime.innerHTML = calcTime(song.duration);
    }, 1000);

    counterCurrentTime = setInterval(function () {
        songCurrentTime.innerHTML = calcTime(song.currentTime);
    }, 1000);
}

// PLAY SELECTED SONG BY USER
function playSelectedSong() {
    const indexNumber = songList.findIndex((currObj) => {
        return currObj.title === this.children[0].children[1].innerHTML;
    });
    index = indexNumber;

    loadSong();

    if (song.paused && song.currentTime === 0) {
        playSongBtn.setAttribute("src", "./assets/images/pause.png");
        song.play();
        return;
    }
}

// GO TO THE TIME SELECTED BY USER IN PROGRESS BAR
function progressAudioTimeManually() {
    progressBarInput.setAttribute("max", `${song.duration * 1000}`);
    timeCurrent = progressBarInput.value / 1000;
    song.currentTime = timeCurrent;
}
function progressBarWidth() {
    progressBarInput.value = song.currentTime * 1000;
    time = song.currentTime * (1000 / song.duration);
    width = time / 10;
    progressBar.style.width = `${width}%`;
}

// PLAY AND PAUSE FUNCTION
function playAndPauseSong() {
    if (song.paused) {
        playSongBtn.setAttribute("src", "./assets/images/pause.png");
        progressBarInput.setAttribute("max", `${song.duration * 1000}`);
        song.play();
        return;
    }

    if (!song.paused) {
        playSongBtn.setAttribute("src", "./assets/images/play.png");
        song.pause();
    }
}

// PREVIOUS AND NEXT SONG FUNCTIONS
function skipForPrevSong() {
    if (index === 0) {
        index = songList.length;
        skipForPrevSong();
        return;
    }

    if (index > 0) {
        index--;
        song.src = songList[index].src;
        loadSong();
        playSongBtn.setAttribute("src", "./assets/images/pause.png");
        song.play();
    }
}
function skipForNextSong() {
    if (buttonShuffleState == false) {
        index++;
    } else if (buttonShuffleState == true) {
    }
    if (index === songList.length) {
        index = 0;
    }
    console.log("eu");
    song.src = songList[index].src;
    loadSong();
    playSongBtn.setAttribute("src", "./assets/images/pause.png");
    song.play();
}

// SHUFFLE AND REPEAT FUNCTIONS
function shuffleSongFunction() {
    if (buttonShuffleState === false) {
        buttonShuffleState = true;
        buttonRepeatState = true;
        repeatSongFunction();

        shuffleSongBtn.classList.add("button-activated");
        song.removeEventListener("ended", skipForNextSong);
        song.addEventListener("ended", function shuffle() {
            if (shuffleSongBtn.classList.contains("button-activated")) {
                numSongs = songList.length;
                nextRandomSong = Math.floor(Math.random() * numSongs);
                console.log("shuffle");
                index = nextRandomSong;
                console.log(index);
                skipForNextSong();
            } else {
                song.removeEventListener("ended", shuffle);
                song.addEventListener("ended", skipForNextSong);
            }
        });
        return;
    }
    if (buttonShuffleState === true) {
        shuffleSongBtn.classList.remove("button-activated");
        buttonShuffleState = false;
    }
}
function repeatSongFunction() {
    if (buttonRepeatState === false) {
        buttonRepeatState = true;
        buttonShuffleState = true;
        shuffleSongFunction();

        repeatSongBtn.classList.add("button-activated");
        song.removeEventListener("ended", skipForNextSong);
        song.addEventListener("ended", function repeat() {
            if (repeatSongBtn.classList.contains("button-activated")) {
                song.currentTime = 0;
                song.play();
            } else {
                song.removeEventListener("ended", repeat);
                song.addEventListener("ended", skipForNextSong);
            }
        });
        return;
    }

    if (buttonRepeatState === true) {
        repeatSongBtn.classList.remove("button-activated");
        buttonRepeatState = false;
    }
}

// EXPAND SONG IN MOBILE
expandSongBtn.addEventListener("click", function () {
    if (buttonExpandState == false) {
        playerContainer.style.flexDirection = "column";
        playerContainer.style.height = "80vh";
        progressContainer.style.marginBottom = "10px";
        expandSongBtn.src = "./assets/images/minimize.png";
        songInfo.style.display = "flex";
        buttonExpandState = true;
        return;
    }
    if (buttonExpandState == true) {
        playerContainer.style.flexDirection = "column-reverse";
        playerContainer.style.height = "95px";
        progressContainer.style.marginBottom = "20px";
        expandSongBtn.src = "./assets/images/expand.png";
        songInfo.style.display = "none";
        buttonExpandState = false;
    }
});

// SHOW FOOTER ON OVER IN DESKTOP VERSION
function showFooterContainer() {
    footerContainer.style.height = "130px";
    footerContainer.addEventListener("mouseleave", function () {
        footerContainer.style.height = "32px";
    });
}

song.addEventListener("timeupdate", progressBarWidth);
song.addEventListener("ended", skipForNextSong);
progressBarInput.addEventListener("change", progressAudioTimeManually);
footerContainer.addEventListener("mouseover", showFooterContainer);

darkModeBtn.addEventListener("click", enableDarkMode);

playSongBtn.addEventListener("click", playAndPauseSong);
prevSongBtn.addEventListener("click", skipForPrevSong);
nextSongBtn.addEventListener("click", skipForNextSong);
shuffleSongBtn.addEventListener("click", shuffleSongFunction);
repeatSongBtn.addEventListener("click", repeatSongFunction);
