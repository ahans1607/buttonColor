yellowBtn = document.getElementById("yellow");
blueBtn = document.getElementById("blue");
redBtn = document.getElementById("red");
greenBtn = document.getElementById("green");
blackBtn = document.getElementById("black");
title = document.getElementById("title")

legendColor = document.getElementById("legend");

colorBoolObj = {
    yellow : "false",
    blue : "false",
    red : "false",
    green : "false",
    black : "false"
}


yellowBtn.addEventListener("click", turnYellow)

function turnYellow(){
    legendColor.style.background = "yellow"
    colorBoolObj['yellow'] = "true"
    title.style.color = "black"

}

blueBtn.addEventListener("click", turnBlue)

function turnBlue(){
    legendColor.style.background = "blue"
    colorBoolObj['blue'] = "true"
    title.style.color = "white"
}

redBtn.addEventListener("click", turnRed)

function turnRed(){
    legendColor.style.background = "red"
    colorBoolObj['red'] = "true"
    title.style.color = "black"

}

greenBtn.addEventListener("click", turnGreen)

function turnGreen(){
    legendColor.style.background = "green"
    colorBoolObj['green'] = "true"
    title.style.color = "white"

}

blackBtn.addEventListener("click", turnBlack)

function turnBlack(){
    legendColor.style.background = "black"
    colorBoolObj['black'] = "true"
    title.style.color = "white"
}







