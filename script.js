const picture = document.querySelector("#picture");
const darkModeButton = document.querySelector("#darkModeButton");

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeButton.innerHTML = '<i class="iconoir-sun-light"></i>';
        darkModeButton.querySelector("i").style.color = "#f4f4f5";
        picture.src = "images/1x1sg.jpg";
    } else {
        darkModeButton.innerHTML = '<i class="iconoir-half-moon"></i>';
        darkModeButton.querySelector("i").style.color = "#0a0a0a";
        picture.src = "images/1x1.jpg";
    }

}

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

ScrollReveal().reveal(".project-container", {
    origin: "bottom",
    distance: "20px",
    duration: 600,
    delay: 100,
    interval: 150,
    reset: false
});