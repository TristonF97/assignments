const readlineSync = require("readline-sync");

var num1 = readlineSync.question("Please enter your first number: ");

var num2 = readlineSync.question("Please enter your second number: ");

mathOperators = ["add", "sub", "mul", "div"],
index = readlineSync.keyInSelect(mathOperators, "Please enter the operation to perform: add, sub, mul, div.");
    console.log(mathOperators[index])
    if (mathOperators[index] === "add"){
        console.log("The result is: " + add(num1, num2))
    }
    if(mathOperators[index] === "sub"){
        console.log("The result is: " + sub(num1, num2))
    }
    if(mathOperators[index] === "mul"){
        console.log("The result is: " + mul(num1, num2))
    }
    if(mathOperators[index] === "div"){
        console.log("The result is: " + div(num1, num2))
    } else {
        console.log("Cancel")
    }

function add(num1, num2) {
    return +num1 + +num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}