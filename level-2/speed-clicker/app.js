var clicks = 0;
var button = document.getElementById("button");
var countedClicks = document.getElementById("clicks");

button.onclick = function() {
    clicks += 1;
    countedClicks.textContent = "You've clicked: " + clicks + " times.";
    localStorage.setItem("clicks", clicks)
}

document.getElementById("previous").textContent = "Previous clicks: " + localStorage.getItem("clicks")