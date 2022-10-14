let i=0;
let searchElement = document.querySelector(".searchIcon svg");
let searchInputElement = document.querySelector(".searchBox");
let profileIconElement = document.querySelector(".profileIcon svg");
let arrowIconElement = document.querySelector(".profileIcon img");
let profileDiv = document.querySelector(".profileContent");
let buttonElement = document.getElementsByClassName("flexBox");
let arrowElement = document.querySelectorAll(".directionArrow");

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