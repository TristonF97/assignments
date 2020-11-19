const buttons = {
    button1: "Like",
    button2: "Dislike"
}
console.log(buttons.button1)
console.log(buttons.button2)

function likeIt() {
    const likeArray = ["I'm", "glad", "you", "like", "it!"]
    for (var i = 0; i < likeArray.length; i++) {
        console.log( likeArray[i] )
        alert( likeArray[i] )
    }
}

function dontLikeIt() {
    let whyNot = "false"
    if (whyNot === "true") {
        alert( "You should like it!" )
    } else { alert( "Well why dont you like it?" )}
}

let playerOne = {
    isAlive: true,
    weapons: ['mace','stick','ping pong paddle'],
    hp: 100,
    name: 'Alfredo'
    
}

console.log(playerOne.weapons[1][0])


let pen = {
    color: 'black',
    hasInk: true,

}

let waterJug = {
    volume: "1400ml",
    color: 'blue',
    isFull: false
}




//Condtional Statement
//if (this is true){ execute this code }
//  else if (this is true) {do this code instead!}
//  else {for anything else do this here!}
//using the variable provided below create a condional statement

var letter = 'a'

if (letter ==='b'){
    console.log('I am a')
} else if (letter === 'a'){
    console.log('i am b')
} else {
    console.log('i am a or b')
}



var firstName = "Ray"

if (firstName === 'Ray') {
    console.log('I am Roger')
} else if (firstName === 'Roger') {
    console.log('I am Ray')
} else {
    console.log("I am no one!")
}


//For Loops - A their most elemetary form they are just creating an number line for us; starting at a number and ending at a number
//for (#1 start point; #2end point; #4howtogetthere){
//    #3 what to do 
//}

for ( let i = 13; i > 0 ; i--){
    console.log(i)
}