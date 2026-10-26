const picture = document.querySelector("#picture");
const sounds = document.querySelector("#sounds");
const darkModeButton = document.querySelector("#darkModeButton");

darkModeButton.onclick = () => {
    document.body.classList.toggle("dark-mode");
    darkModeButton.innerHTML = document.body.classList.contains("dark-mode") ? '<i class="iconoir-sun-light"></i>' : '<i class="iconoir-half-moon"></i>';
    darkModeButton.querySelector("i").style.color = document.body.classList.contains("dark-mode") ? "#f2f4f7" : "#212326";
}

picture.addEventListener("mouseover", event => {
    event.target.src = "images/1x1sg.jpg";
    sounds.play();
});

picture.addEventListener("mouseout", event => {
    event.target.src = "images/1x1.jpg";
    sounds.pause();
});

ScrollReveal().reveal(".info, .about, .education, .tools, .projects", {
    delay: 200,
    distance: "20px",
    origin: "bottom",
    duration: 800,
    reset: true
});

ScrollReveal().reveal(".links a", {
    origin: "bottom",
    distance: "20px",
    duration: 800,
    interval: 100,
    reset: true
});

ScrollReveal().reveal("#stacks p", {
    origin: "bottom",
    distance: "20px",
    duration: 800,
    interval: 100,
    reset: true
});

ScrollReveal().reveal(".project-container div", {
    origin: "bottom",
    distance: "20px",
    duration: 800,
    interval: 100,
    reset: true
});