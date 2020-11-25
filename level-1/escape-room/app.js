const readlineSync = require("readline-sync");

const name = readlineSync.question("What is your name? ");
console.log (name + ", you wake up in the middle of a small room.\nYou see a door in the north wall of the room,\nand a fist sized hole in the south wall.")

options = ["Put hand in hole", "Find the key", "Open the door"]
index = readlineSync.keyInSelect(options, "What will you do?");
    if (options[index] === "Put hand in hole"){
    console.log("You died. Try again.");
        return;
}

    if (options[index] === "Find the key"){
    console.log("You find the Key!");

optionsTwo = ["Put hand in hole", "Unlock the door"]
indexTwo = readlineSync.keyInSelect(optionsTwo, "What now?");
    if (optionsTwo[indexTwo] === "Put hand in hole"){
        console.log("You died. Try again.");
        return;
}

    if (optionsTwo[indexTwo] === "Unlock the door"){
        console.log("You open the door and escape!\nCongratulations " + name + "! You Win!");
        return;
}
}

    if (options[index] === "Open the door"){
    console.log("The door is locked.")
}

optionsThree = ["Put your hand in the hole", "Look for the key"]
indexThree = readlineSync.keyInSelect(optionsThree, "What next?");
    if (optionsThree[indexThree] === "Put your hand in the hole"){
        console.log("You died. Try again.");
        return;
}
    if (optionsThree[indexThree] === "Look for the key"){
        console.log("You found the key!");
}

optionsFour = ["Find out whats in the hole", "Free yourself"]
indexFour = readlineSync.keyInSelect(optionsFour, "Well?");
        if (optionsFour[indexFour] === "Find out whats in the hole"){
            console.log("You died. Try again.");
            return;
}
        if (optionsFour[indexFour] === "Free yourself"){
        console.log("You unlock the door and free yourself!\nCongratulations " + name + "! You Win!");

}