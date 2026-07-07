const startScreen = document.getElementById("startScreen");
const mainMenu = document.getElementById("mainMenu");
const startTapButton = document.getElementById("startTapButton");
const backToStartButton = document.getElementById("backToStartButton");
const startImage = document.getElementById("startImage");

/*
  To use your full Cloudflare image URL instead of a local file,
  uncomment the next line after replacing the data-cloudflare-src value in index.html.

  startImage.src = startImage.dataset.cloudflareSrc;
*/

function showScreen(screenToShow) {
  [startScreen, mainMenu].forEach((screen) => {
    screen.classList.remove("is-active");
  });

  screenToShow.classList.add("is-active");
}

function enterMainMenu() {
  showScreen(mainMenu);
}

function returnToStartScreen() {
  showScreen(startScreen);
}

startTapButton.addEventListener("click", enterMainMenu);
startTapButton.addEventListener("touchend", (event) => {
  event.preventDefault();
  enterMainMenu();
}, { passive: false });

backToStartButton.addEventListener("click", returnToStartScreen);

startImage.addEventListener("error", () => {
  console.warn("Could not load godsofwartitle.png. Check that the image is beside index.html, or use the Cloudflare URL.");
});
