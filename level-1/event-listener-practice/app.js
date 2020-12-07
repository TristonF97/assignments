var square = document.getElementById("square").style.cssText = "width: 300px; height: 300px; background-color: black; border-radius: 10px;";

document.querySelector("div").addEventListener("mouseover", blue);

function blue() {
    this.style.backgroundColor = "blue"
}

document.querySelector("div").addEventListener("mousedown", red);

function red() {
    this.style.backgroundColor = "red"
}

document.querySelector("div").addEventListener("mouseup", yellow);

function yellow() {
    this.style.backgroundColor = "yellow"
}

document.querySelector("div").addEventListener("dblclick", green);

function green() {
    this.style.backgroundColor = "green"
}

document.querySelector("div").addEventListener("wheel", orange);

function orange() {
    this.style.backgroundColor = "orange"
}