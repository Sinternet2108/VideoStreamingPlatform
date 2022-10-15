let searchElement = document.querySelector(".searchIcon svg");
let searchInputElement = document.querySelector(".searchBox");
let profileIconElement = document.querySelector(".profileIcon svg");
let arrowIconElement = document.querySelector(".profileIcon img");
let profileDiv = document.querySelector(".profileContent");
let buttonElement = document.getElementsByClassName("flexBox");
let arrowElement = document.querySelectorAll(".directionArrow");
let mainContentDiv = document.querySelector(".mainStartVideo");
let kantaraImage = document.querySelector(".kantara");
let arrowRightSlider = document.querySelector(".moviesSlider svg");
let movieSlider = document.querySelector(".moviesCollection");
let arrowLeftSlider = document.querySelector(".leftArrowSlider");

searchElement.addEventListener("click",expandSearch);

function expandSearch()
{
    searchElement.remove();
    searchInputElement.style.setProperty("display","block");
}

profileIconElement.addEventListener("click",addContent);
arrowIconElement.addEventListener("click",addContent);

function addContent()
{
    arrowIconElement.classList.toggle("rotateArrow");
    profileDiv.classList.toggle("showContent");
}

for(let i=0;i<buttonElement.length;i++)
{
    buttonElement[i].addEventListener("mouseover",()=>{
        arrowElement[i].style.setProperty("display","block")
    })

    buttonElement[i].addEventListener("mouseout",()=>{
        arrowElement[i].style.setProperty("display","none")
    })
}

arrowRightSlider.addEventListener("click",()=>{
    movieSlider.style.setProperty("transform","translateX(-100vw)");
    arrowRightSlider.style.setProperty("display","none");
    arrowLeftSlider.style.setProperty("display","block");
})

arrowLeftSlider.addEventListener("click",()=>{
    movieSlider.style.setProperty("transform","translateX(0vw)");
    arrowLeftSlider.style.setProperty("display","none");
    arrowRightSlider.style.setProperty("display","block");
})


