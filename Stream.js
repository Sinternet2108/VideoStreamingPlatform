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
let videoElement = document.querySelectorAll(".VideoPlayer video");
let asideElement = document.querySelector(".videoWindow");
let imageElement = document.querySelectorAll(".movieDivision img");

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

// console.log(videoElement.length);
trailerElement.addEventListener("click", () => {
    videoElement[0].style.setProperty("display","block");
    videoPlay();
    videoElement[0].play();
    for(let i=1;i<videoElement.length;i++)
    {
        videoElement[i].style.setProperty("display","none");
        videoElement[i].pause();
    }
});

function videoPlay()
{
    videoPlayer.style.setProperty("display", "block");
    mainContent.style.setProperty("display", "none");
    headerContent.style.setProperty("display", "none");
    backArrowDiv.style.setProperty("display", "block");
    asideElement.style.setProperty("display","block");
    asideElement.style.setProperty("height","100vh");
}

for (let i = 0; i < imageElement.length; i++) {
    backArrow.addEventListener("click", () => {
        backFunction();
        if(videoElement[i].play())
        {
            videoElement[i].pause();
        }
    })
}

function backFunction() {
    videoPlayer.style.setProperty("display", "none");
    mainContent.style.setProperty("display", "block");
    headerContent.style.setProperty("display", "flex");
    backArrowDiv.style.setProperty("display", "none");
    asideElement.style.setProperty("display", "none");
}

for (let i = 0; i < imageElement.length; i++) {
    imageElement[i].addEventListener("mouseover", () => {
        imageElement[i].classList.add("hoverMovies");        
    })
}

// console.log(imageElement.length);
for (let i = 0; i < imageElement.length; i++) {
    imageElement[i].addEventListener("click", () => {
        for(let j=0;j<videoElement.length;j++)
        {
            if(j-1!=i)
            {   //videoElement[0].style.setProperty("display","none");
                videoElement[j].style.setProperty("display","none");
                videoElement[j].pause();
            }
        }
        videoPlay();
        videoElement[i+1].style.setProperty("display","block");
        videoElement[i+1].play();
    })
}
