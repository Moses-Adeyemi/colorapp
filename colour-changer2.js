let colourChanger = document.getElementById("colour-changer2");
let colours = ["indigo", "chocolate", "orange", "yellow", "violet", "pink", "green", "white", "blue", "purple", "brown", "red", ];


let counter = 0;

function changecolour() {
    if (counter >= colours.lenght) {
        count = 0;
    }
    colourChanger.style.background = colours[counter];
    counter++;
}

let myTimer = setInterval(changecolour, 1000);