let darkmode = localStorage.getItem("darkmode");
const darkModeButton = document.querySelector(".dark-mode-button");

function enableDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkmode", "active");
    darkModeButton.style.color = "#f4f4f5";
    darkModeButton.innerHTML = '<i class="iconoir-sun-light"></i>';
}

function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkmode", null);
    darkModeButton.style.color = "#0a0a0a";
    darkModeButton.innerHTML = '<i class="iconoir-half-moon"></i>';
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