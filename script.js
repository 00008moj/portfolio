const darkModeButton = document.querySelector(".dark-mode-button");

darkModeButton.onclick = () => {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

window.addEventListener("pageshow", () => {
    document.querySelector("form").reset();

});

ScrollReveal().reveal(".text-content, #about, #tools, #projects, #contact-me, footer", {
    distance: "20px",
    origin: "bottom",
    duration: 450,
    delay: 0,
    easing: "ease-out",
    reset: false,
    viewFactor: 0.15
});

ScrollReveal().reveal(".hero-name, .hero-description, .hero-actions button", {
    distance: "20px",
    origin: "bottom",
    duration: 450,
    delay: 0,
    interval: 80,
    easing: "ease-out",
    reset: false
});

ScrollReveal().reveal(".links a", {
    distance: "20px",
    origin: "bottom",
    duration: 450,
    delay: 0,
    interval: 80,
    easing: "ease-out",
    reset: false
});

ScrollReveal().reveal(".stack p", {
    distance: "20px",
    origin: "bottom",
    duration: 450,
    delay: 0,
    interval: 80,
    easing: "ease-out",
    reset: false
});

ScrollReveal().reveal(".project-reveal", {
    distance: "20px",
    origin: "bottom",
    duration: 450,
    delay: 0,
    interval: 80,
    easing: "ease-out",
    reset: false
});

const dialog = document.querySelector(".music-dialog");
const songs = [
    {
        title: "'Cause You Have To",
        artist: "LANY",
        src: "music/'Cause You Have To.webm"
    },
    {
        title: "Baby 123",
        artist: "RAPROJECT SIX",
        src: "music/Baby 123.webm"
    },
    {
        title: "My Day",
        artist: "HELLMERRY",
        src: "music/My Day.webm"
    },
    {
        title: "Paradise",
        artist: "Chase Atlantic",
        src: "music/Paradise.webm"
    },
    {
        title: "TMA",
        artist: "groundZERO Records, Tyler, Primera & ODP",
        src: "music/TMA.webm"
    }
];
const audio = document.querySelector(".audio-player");
const songTitle = document.querySelector(".song-title");
const songArtist = document.querySelector(".song-artist");
const previous = document.querySelector("#previous-song");
const play = document.querySelector("#play-song");
const next = document.querySelector("#next-song");
let currentIndex = 0;

document.querySelector(".music-button").addEventListener("click", () => {
    dialog.showModal();
});

document.querySelector(".close-dialog").addEventListener("click", () => {
    dialog.close();
});

dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});

function playSong() {
    if (audio.paused) {
        if (!audio.src) {
            const selectedSong = songs[currentIndex];

            audio.src = selectedSong.src;
            songTitle.textContent = selectedSong.title;
            songArtist.textContent = selectedSong.artist;
        }

        audio.play();
    } else {
        audio.pause();
    }
}

audio.addEventListener("play", () => {
    play.innerHTML = '<i class="iconoir-pause"></i>';
});

audio.addEventListener("pause", () => {
    play.innerHTML = '<i class="iconoir-play"></i>';
});

function previousSong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    const selectedSong = songs[currentIndex];

    audio.src = selectedSong.src;
    songTitle.textContent = selectedSong.title;
    songArtist.textContent = selectedSong.artist;
    audio.play();
}

function nextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    const selectedSong = songs[currentIndex];

    audio.src = selectedSong.src;
    songTitle.textContent = selectedSong.title;
    songArtist.textContent = selectedSong.artist;
    audio.play();
}

play.addEventListener("click", playSong);
previous.addEventListener("click", previousSong);
next.addEventListener("click", nextSong);