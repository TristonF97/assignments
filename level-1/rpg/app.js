const readline = require("readline-sync")
let victory = false

// Enemy constructor
class Enemy {
    constructor(name, hp, item) {
        this.name = name;
        this.hp = hp;
        this.item = item;
    }
}

// List of enemies
let enemyArray = [
    new Enemy("Vampire", 6, "Vampire teeth"),
    new Enemy ("Werewolf", 10, "Werewolf claws"),
    new Enemy ("Wendigo", 15, "Wendigo bones")
]

// Battle Loop
function battleLoop(enemy) {
    while (player.hp > 0 && enemy.hp > 0) {
        let playerAttack = Math.floor(Math.random() * 5) + 1;
        let enemyAttack = Math.floor(Math.random() * 3) + 1;
        player.hp -= enemyAttack;
        enemy.hp -= playerAttack;

        console.clear();
        readline.keyInPause("Fight on!");

        console.clear();
        readline.keyInPause("You use your trusty monster slaying weapon to attack the " + enemy.name + "! You hit them for " + playerAttack + " damage! " + enemy.name + "'s hp is now: " + enemy.hp);
        if (enemy.hp <= 0) {
            readline.keyInPause("You land a critical attack on the " + enemy.name + " and they collapse!")
        }
        if (enemy.hp > 0) {
            readline.keyInPause("The " + enemy.name + " is fast and breaks your defences! You are hit for " + enemyAttack + " Your hp is now: " + player.hp)
        }
        console.clear();
    }

    // Player victory
    if (player.hp > 0) {
        player.hp += Math.floor(Math.random() * 5) + 5;
        readline.keyInPause("Good job " + player.name + "! You beat the " + enemy.name + "!\nYou take a moment to harvest your reward, and add it to your inventory.\nYou got " + enemy.item + "!\nYou also bolster yourself for the next encounter. Your HP is now: " + player.hp);
        player.inventory.push(enemy.item);
        // Removes the enemy from the enemyArray
        for (var i = 0; i < enemyArray.length; i++) {
            if (enemyArray[i] === enemy) {
                enemyArray.splice(i, 1);
                i--;
            }
        }
    }

    // All enemies defeated. GAME WON
    if (enemyArray.length === 0) {
        console.clear();
        readline.keyInPause("Congratulations " + player.name + "! You defeated all the monsters and made it out of the house!\nTime to kick back and see how much those monster parts are worth!");
        victory = true;
        console.clear();
        console.log("THE END")
    }
    
    // Player death. GAME OVER
    if (player.hp <= 0) {
        readline.keyInPause("The " + enemy.name + " lands a final blow on you and reduces your hp to 0.\nGAME OVER");
        victory = true;
    }
}

// Random enemy selector
function randomPick() {
    let randomEnemy = Math.floor(Math.random() * enemyArray.length)
    return enemyArray[randomEnemy]
    }

// Game Start!
console.clear();
const name = readline.question("Hey, you. You're finally awake. It is I, your Narrator!\nHow could you be so easily ambushed? Huh? What's that?\nYou're confused? Let's start with this then,\ndo you remember your name? ");
console.clear();
readline.keyInPause("Well " + name + ", that's a start. You're a monster hunter! And you're here to slay some monsters!\nSeems one of them got the drop on you and left you here for a late night snack!\nDon't be lazy now, lives are on the line! Free yourself, pick up your monster hunting gear\nand get ready to search this house for monsters!");
console.clear();
console.log("It doesn't take you long to free yourself from your restraints, and grab your things. What now?");

// Player object
const player = {
    name: name,
    hp: 10,
    inventory: ["Your trusty monster slaying weapon", ]
}

// Player options
while (victory === false) {
    let options = readline.keyIn("To continue through the house, press [w]. To check your stats and inventory, press [p]. To quit, press [q]. ", {limit: "wpq"});
    console.clear();
    if (options === "w") {
        encounter();
    } else if (options === "p") {
        console.log(player);
    } else if (options === "q") {
        readline.keyInPause("Very well Hunter, but come back and try again soon!");
        victory = true;
    }
}

// Encounter/walk function
function encounter() {
    const encounterChance = Math.floor(Math.random() * 3) + 1;
    if (encounterChance === 1) {
        enemyAppears();
    } else {
        readline.keyInPause("No sign of anything yet, keep looking!");
    }
}

// Fight or run options
function enemyAppears() {
    let enemy = randomPick();
    console.clear();
    readline.keyInPause("A " + enemy.name + " jumps from the shadows!");
    let playerChoice = readline.keyIn("Will you fight the " + enemy.name + " or try to run? Press [f] to fight and [r] to run.", {limit: "fr"});
    if (playerChoice === "r") {
        if (Math.floor(Math.random() * 2) + 1 === 1) {
            run();
        } else {
            let failedEscape = Math.floor(Math.random() * 4) + 1;
            player.hp -= failedEscape
            readline.keyInPause("Try as you might, you can't get away. In your attempt to escape you left yourself vulnerable. You are hit for " + failedEscape + " damage!" + " Your HP is now: " + player.hp);
            battleLoop(enemy);
        }
    }
    if (playerChoice === "f") {
        battleLoop(enemy);
    }
    }

// For a successful run/escape
function run() {
    readline.keyInPause("You get past the monster and keep moving. However, you will have to face them eventually!");
    }