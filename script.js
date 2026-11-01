const picture = document.querySelector("#picture");
const darkModeButton = document.querySelector("#darkModeButton");
const viewAll = document.querySelector(".view-all");
let darkmode = localStorage.getItem("dark-mode");

function enableDarkMode() {
    document.body.classList.toggle("dark-mode");

    darkModeButton.innerHTML = '<i class="iconoir-sun-light"></i>';
    darkModeButton.querySelector("i").style.color = "#f4f4f5";
    picture.src = "images/1x1sg.jpg";

    localStorage.setItem("dark-mode", "active");
}

function disableDarkMode() {
    document.body.classList.remove("dark-mode");

    darkModeButton.innerHTML = '<i class="iconoir-half-moon"></i>';
    darkModeButton.querySelector("i").style.color = "#0a0a0a";
    picture.src = "images/1x1.jpg";

    localStorage.setItem("dark-mode", null);
}

if (darkmode === "active") {
    enableDarkMode();
}

darkModeButton.addEventListener("click", () => {
    darkmode = document.body.classList.contains("dark-mode") ? "active" : null;

    darkmode !== "active" ? enableDarkMode() : disableDarkMode();

    darkmode = localStorage.getItem("dark-mode");
})

ScrollReveal().reveal(".info, .about, .education, .tools, .projects", {
    distance: "20px",
    origin: "bottom",
    duration: 600,
    delay: 100,
    reset: false
});

ScrollReveal().reveal(".links a", {
    origin: "bottom",
    distance: "20px",
    duration: 500,
    interval: 100,
    reset: false
});

ScrollReveal().reveal("#stacks p", {
    origin: "bottom",
    distance: "20px",
    duration: 500,
    interval: 100,
    reset: false
});

ScrollReveal().reveal(".project-reveal", {
    origin: "bottom",
    distance: "20px",
    duration: 600,
    interval: 150,
    reset: false
});