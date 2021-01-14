class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
    }
}

const player = new Player (
"",     // character name
0,      // total coins
"Big",  // player status
false,  // does player have star?
);

gameActive = true; // is game running?

function setName(namePicked) { // name decision

    namePicked = Math.floor(Math.random() * 2);

    if (namePicked === 0) {
        player.name = "Mario";
    }

    if (namePicked === 1) {
        player.name = "Luigi";
    }

}

setName() // sets player name

function gotHit() { // player hit?

    if (player.hasStar === true) {
        player.hasStar = false;
        console.log("Your star protected you!");
        return;
    }

    if (player.status === "Small") {
        player.status = "Dead";
        player.hasStar = false;
        gameActive = false;
        return;
    }

    if (player.status === "Big") {
        player.status = "Small";
        player.hasStar = false;
    }

    if (player.status === "Powered Up") {
        player.status = "Big";
        player.hasStar = false;
    }
    
}

function gotPowerup() { // power up?

    if (player.status === "Powered Up" && !player.hasStar) {
        player.hasStar = true;
        console.log("congratulations, you got a star!");
    }

    if (player.status === "Big") {
        player.status = "Powered Up";
        player.hasStar = false;
    }

    if (player.status === "Small") {
        player.status = "Big";
        player.hasStar = false;
    }

}

let coins = 0; // starting coins

function addCoin() { // pick up coins
    coins = player.totalCoins;
    player.totalCoins++;
    return coins;
}

let interval = setInterval(function(){      // time interval
    function getRandomRange() {
        let possibilities = Math.floor(Math.random() * 3)
    
        if (possibilities === 0) {
            console.log("You were hit!");
            gotHit();
        }
    
        if (possibilities === 1) {
            console.log("You powered up!");
            gotPowerup();
        }
    
        if (possibilities === 2) {
            console.log("You got a coin!");
            addCoin();
        }
    }

    getRandomRange();

    let playerStats = "\nName: " + player.name + "\nStatus: " + player.status + "\nTotal Coins: " + player.totalCoins + "\nStar: " + player.hasStar + "\n";
    console.log(playerStats);

    if (gameActive === false) {
        clearInterval(interval);
        console.log("You lost! Good try though!\nYour final score is: " + player.totalCoins);
    }

 }, 2000)