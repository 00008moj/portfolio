let darkmode = localStorage.getItem("dark-mode");
const darkModeButton = document.querySelector(".dark-mode-button");

function enableDarkMode() {
    document.body.classList.add("dark.mode");
    localStorage.setItem("darkmode", "active");
}

function disableDarkMode() {
    document.body.classList.remove("dark.mode");
    localStorage.setItem("darkmode", null);
}

if (darkmode === "active") {
    enableDarkMode();
}

darkModeButton.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});