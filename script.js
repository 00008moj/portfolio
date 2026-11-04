const darkModeButton = document.querySelector(".dark-mode-button");

darkModeButton.onclick = () => {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem(("theme") === "dark")) {
    document.body.classList.add("dark-mode");
}

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