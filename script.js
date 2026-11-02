let darkmode = localStorage.getItem("darkmode");
const darkModeButton = document.querySelector(".dark-mode-button");

function enableDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkmode", "active");
}

function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkmode", null);
}

if (darkmode === "active") {
    enableDarkMode();
}

darkModeButton.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});

window.addEventListener("pageshow", () => {
    document.querySelector("form").reset();

});

ScrollReveal().reveal(".text-content, #about, #tools, #projects, #contact-me, footer", {
    distance: "20px",
    origin: "bottom",
    duration: 650,
    delay: 100,
    reset: false
});

ScrollReveal().reveal(".hero-name, .hero-description, .hero-actions button", {
    distance: "20px",
    origin: "bottom",
    duration: 650,
    interval: 100,
    reset: false
});

ScrollReveal().reveal(".links a", {
    distance: "20px",
    origin: "bottom",
    duration: 650,
    interval: 100,
    reset: false
});

ScrollReveal().reveal(".stack p", {
    distance: "20px",
    origin: "bottom",
    duration: 650,
    interval: 100,
    reset: false
});

ScrollReveal().reveal(".project-reveal", {
    distance: "20px",
    origin: "bottom",
    duration: 650,
    interval: 100,
    reset: false
});