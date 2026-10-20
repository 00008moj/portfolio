ScrollReveal().reveal("div", {
    delay: 200,
    distance: "20px",
    origin: "bottom",
    duration: 800,
    reset: true
});

ScrollReveal().reveal("#stacks p", {
    origin: "bottom",
    distance: "20px",
    duration: 800,
    interval: 100,
    reset: true
});

ScrollReveal().reveal(".links a", {
    origin: "bottom",
    distance: "20px",
    duration: 800,
    interval: 100,
    reset: true
});

const picture = document.querySelector("#picture");
const sounds = document.querySelector("#sounds");

picture.addEventListener("mouseover", event => {
    event.target.src = "images/1x1sg.jpg";
    sounds.play();
});

picture.addEventListener("mouseout", event => {
    event.target.src = "images/1x1.jpg";
    sounds.pause();
});

const root = document.documentElement;
const toggle = document.querySelector(".darkbutton input");
const media = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    toggle.checked = theme === "dark";
}

const saved = localStorage.getItem("theme");
applyTheme(saved || (media.matches ? "dark" : "light"));

toggle.addEventListener("change", () => {
    const theme = toggle.checked ? "dark" : "light";
    applyTheme(theme);
    localStorage.setItem("theme", theme);
});