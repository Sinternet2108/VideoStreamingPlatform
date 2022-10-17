window.onbeforeunload = function () {
    return "Are You Sure? You will lead to Home Page...";
}

let searchElement = document.querySelector(".searchIcon svg");
let searchInputElement = document.querySelector(".searchBox");
let profileIconElement = document.querySelector(".profileIcon svg");
let arrowIconElement = document.querySelector(".profileIcon img");
let profileDiv = document.querySelector(".profileContent");
let buttonElement = document.getElementsByClassName("flexBox");
let arrowElement = document.querySelectorAll(".directionArrow");
let mainContentDiv = document.querySelector(".mainStartVideo");
let kantaraImage = document.querySelector(".kantara");
let movieSlider = document.querySelectorAll(".moviesCollection");
let arrowRightSlider = document.querySelectorAll(".rightArrowSlider");
let arrowLeftSlider = document.querySelectorAll(".leftArrowSlider");
let trailerElement = document.querySelector(".playBtnTrailer");
let videoPlayer = document.querySelector(".VideoPlayer");
let mainContent = document.querySelector(".mainContent");
let headerContent = document.querySelector(".heading");
let backArrowDiv = document.querySelector(".Backarrow");
let backArrow = document.querySelector(".Backarrow svg");
let backWritten = document.querySelector(".label");

searchElement.addEventListener("click", expandSearch);

function expandSearch() {
    searchElement.remove();
    searchInputElement.style.setProperty("display", "block");
}

profileIconElement.addEventListener("click", addContent);
arrowIconElement.addEventListener("click", addContent);

function addContent() {
    arrowIconElement.classList.toggle("rotateArrow");
    profileDiv.classList.toggle("showContent");
}

for (let i = 0; i < buttonElement.length; i++) {
    buttonElement[i].addEventListener("mouseover", () => {
        arrowElement[i].style.setProperty("display", "block")
    })

    buttonElement[i].addEventListener("mouseout", () => {
        arrowElement[i].style.setProperty("display", "none")
    })
}

for (let i = 0; i < movieSlider.length; i++) {
    arrowRightSlider[i].addEventListener("click", () => {
        movieSlider[i].style.setProperty("transform", "translateX(-100vw)");
        arrowRightSlider[i].style.setProperty("display", "none");
        arrowLeftSlider[i].style.setProperty("display", "block");
    })

    arrowLeftSlider[i].addEventListener("click", () => {
        movieSlider[i].style.setProperty("transform", "translateX(0vw)");
        arrowLeftSlider[i].style.setProperty("display", "none");
        arrowRightSlider[i].style.setProperty("display", "block");
    })
}

trailerElement.addEventListener("click", () => {
    videoPlayer.style.setProperty("display", "block");
    mainContent.style.setProperty("display", "none");
    headerContent.style.setProperty("display", "none");
    backArrowDiv.style.setProperty("display", "block");
});

backArrow.addEventListener("click", backFunction);

function backFunction() {
    videoPlayer.style.setProperty("display", "none");
    mainContent.style.setProperty("display", "block");
    headerContent.style.setProperty("display", "flex");
    backArrowDiv.style.setProperty("display", "none");
}
