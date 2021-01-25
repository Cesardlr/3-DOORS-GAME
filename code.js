// -------------
ScrollReveal().reveal('.header__img',{delay: 250});
ScrollReveal().reveal('.header__title',{delay: 500});
ScrollReveal().reveal('.sections',{delay: 750});

const addButton = document.querySelector("#add-button")
const addInput = document.querySelector("#add-input")

const restartButton = document.querySelector("#restart-button")

let themeButton = document.getElementById("theme-button")

let addedDoors = document.querySelector("#added-doors")

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
door = document.querySelector('.added-doors__img')
door1 = document.getElementById('door1')
door2 = document.getElementById('door2')
door3 = document.getElementById('door3')
changeMessage = document.querySelector(".changeDoor-message")

door1.addEventListener('click',function () {
        door2.src = 'img/open-door.png'
        door1.style.border = '2px solid #fff'
    setInterval(() => {
        changeMessage.style.visibility = 'visible'
    }, 1500);

})



// ---------------------RESTART BUTTON-------------------------------
            restartButton.addEventListener('click',function () {
                var childNodesToRemove = document.querySelector("#added-doors").getElementsByClassName('added-doors__img');
        for (let i = childNodesToRemove.length-1; i >= 0; i--) {
            var childNode = childNodesToRemove[i]
            childNode.parentNode.removeChild(childNode)
            addButton.disabled = false
        } 
        console.log(addData)
    })


    // ----------------------THEME CHANGER-----------------------

    const body = document.body
    const header = document.getElementById('header')
    const theme = localStorage.getItem('theme');

    function lightToDark() {
        body.classList.replace('light','dark')
        header.classList.replace('lightHeader','darkHeader')
        localStorage.setItem('theme','dark')
        themeButton.style.transform = 'rotate(180deg)'
    }

    function darkToLight() {
        body.classList.replace('dark','light')
        header.classList.replace('darkHeader','lightHeader')
        localStorage.setItem('theme','light')
        themeButton.style.transform = 'rotate(0deg)'
    }

    let clickCount = 0

    themeButton.addEventListener('click',() =>{
        clickCount++;
        if (clickCount === 1) {
            singleClickTimer = setTimeout(function() {
                clickCount = -1;
                lightToDark();
            }, 100);
        } else if (clickCount === 0) {
            clearTimeout(singleClickTimer);
            clickCount = 0;
            darkToLight();
        }
    },false)


