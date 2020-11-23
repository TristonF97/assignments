const readlineSync = require("readline-sync");

var num1 = readlineSync.question("Please enter your first number: ");

var num2 = readlineSync.question("Please enter your second number: ");

mathOperators = ["add", "sub", "mul", "div"],
index = readlineSync.keyInSelect(mathOperators, "Please enter the operation to perform: add, sub, mul, div. ");
    if (mathOperators[0] === add)
        console.log("The result is: " + add)
    if(mathOperators[1] === sub)
        console.log("The result is: " + sub)
    if(mathOperators[2] === mul)
        console.log("The result is: " + mul)
    if(mathOperators[3] === div){
        console.log("The result is: " + div)
    } else {
        console.log("Cancel")
    }

function add(num1, num2) {
    return (num1 + num2);
}

function sub(num1, num2) {
    return (num1 - num2);
}

function mul(num1, num2) {
    return (num1 * num2);
}

function div(num1, num2) {
    return (num1 / num2);
}