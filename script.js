let darkmode = localStorage.getItem("dark-mode");
const darkModeButton = document.querySelector(".dark-mode-button");
const moonIcon = darkModeButton.querySelector(".iconoir-half-moon");
const sunIcon = darkModeButton.querySelector(".iconoir-sun-light");

function enableDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkmode", "active");
    darkModeButton.style.color = "#f4f4f5";
    moonIcon.style.display = "none";
    sunIcon.style.display = "block"
}

function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkmode", null);
    darkModeButton.style.color = "#0a0a0a";
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
}

if (darkmode === "active") {
    enableDarkMode();
}

darkModeButton.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});