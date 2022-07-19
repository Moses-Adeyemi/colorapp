let colourChanger = document.getElementById("colour-changer");
let colours = ["red", "blue", "green", "white", "purple", "pink", "yellow", "orange", "violet", "brown", "chocolate", "indigo"];


let counter = 0;

function changecolour() {
    if (counter >= colours.lenght) {
        count = 0;
    }
    colourChanger.style.background = colours[counter];
    counter++;
}

let myTimer = setInterval(changecolour, 1500);