var head = document.createElement("h1")
head.textContent = "JavaScript Made This!!"
header.append(head)
head.style.textAlign = "center"

var underHead = document.createElement("h6")
underHead.textContent = " wrote the JavaScript"
head.append(underHead)
underHead.style.textAlign = "center"
underHead.style.fontSize = "16px"

var myName = document.createElement("span")
myName.textContent = "Triston Frischknecht"
underHead.prepend(myName)
myName.style.color = "green"

var messages = document.querySelectorAll(".messages > div")
messages[0].textContent = "Hey! How's it going?";
messages[1].textContent = "Oh not much going on right now. Whats up?";
messages[2].textContent = "Just wondering if you wanted to do something fun and good today?";
messages[3].textContent = "Oh absolutely!";

var button = document.getElementById("clear-button").addEventListener("click", clear)

function clear() {
    var clearMsg = document.querySelectorAll(".messages > div");
    messages[0].classList.remove("left");
    messages[1].classList.remove("right");
    messages[2].classList.remove("left");
    messages[3].classList.remove("right");
    messages[0].textContent = "";
    messages[1].textContent = "";
    messages[2].textContent = "";
    messages[3].textContent = "";
}