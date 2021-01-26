// -------------
ScrollReveal().reveal(".header__img", { delay: 250 });
ScrollReveal().reveal(".header__title", { delay: 500 });
ScrollReveal().reveal(".sections", { delay: 750 });

const addButton = document.querySelector("#add-button");
const addInput = document.querySelector("#add-input");

const restartButton = document.querySelector("#restart-button");

let themeButton = document.getElementById("theme-button");

let addedDoors = document.querySelector("#added-doors");

let addData;

// ----------------------AÑADIR LAS PUERTAS------------------------------

// addButton.addEventListener('click',function event() {
//     addData = addInput.value;
//     if (addData > 10) {
//         document.querySelector(".error-message").style.visibility = 'visible';
//             setInterval(() => {
//                 document.querySelector(".error-message").style.visibility = 'hidden';
//             }, 3000);

//         }else if (addData < 3) {
//             document.querySelector(".error-message2").style.visibility = 'visible';
//             setInterval(() => {
//                 document.querySelector(".error-message2").style.visibility = 'hidden';
//             }, 3000);}

//             else{
//                 for (let i = 0; i < addData; i++) {
//                     door = document.createElement("IMG")
//                     door.src = "img/door.png"
//                     door.className = 'added-doors__img'
//                     addedDoors.appendChild(door)
//                 }
//                 addButton.disabled = true
//                 }})

// ------------------------ DOOR SELECTION ------------------------
let door = document.querySelector(".added-doors__img");
let door1 = document.getElementById("door1");
let door2 = document.getElementById("door2");
let door3 = document.getElementById("door3");
let changeMessage = document.querySelector(".changeDoor-message");
let changeButton = document.querySelector(".button__change");

door1.addEventListener("click", function event(e) {
    door2.src = "img/open-door.png";
    door1.style.border = "2px solid #fff";
    var messageAppear = setInterval(() => {
        changeMessage.style.visibility = "visible";
    }, 1000);
    e.target.removeEventListener('click',event)
    changeButton.addEventListener("click",function () {
        clearInterval(messageAppear)
        door1.style.border = "0px solid transparent";
        door3.style.border = "2px solid #fff";
      // changeButtonsDiv.style.display = 'hidden'
        changeMessage.style.visibility = "hidden";
      // changeButton.disabled = true
    });
});



// ---------------------RESTART BUTTON-------------------------------
restartButton.addEventListener("click", function () {
var childNodesToRemove = document
    .querySelector("#added-doors")
    .getElementsByClassName("added-doors__img");
for (let i = childNodesToRemove.length - 1; i >= 0; i--) {
    var childNode = childNodesToRemove[i];
    childNode.parentNode.removeChild(childNode);
    addButton.disabled = false;
}});

// ----------------------THEME CHANGER-----------------------

const body = document.body;
const header = document.getElementById("header");
const theme = localStorage.getItem("theme");

//------------------------- THEMES -----------------------------
function lightToDark() {
body.classList.replace("light", "dark");
header.classList.replace("lightHeader", "darkHeader");
localStorage.setItem("theme", "dark");
themeButton.style.transform = "rotate(180deg)";
}

function darkToLight() {
body.classList.replace("dark", "light");
header.classList.replace("darkHeader", "lightHeader");
localStorage.setItem("theme", "light");
themeButton.style.transform = "rotate(0deg)";
}

//----------------------- THEME BUTTON ENGINE ------------------
let clickCount = 0;

themeButton.addEventListener("click",() => {
    clickCount++;
    if (clickCount === 1) {
    singleClickTimer = setTimeout(function () {
        clickCount = -1;
        lightToDark();
    }, 100);
    } else if (clickCount === 0) {
    clearTimeout(singleClickTimer);
    clickCount = 0;
    darkToLight();
    }});
