const readlineSync = require("readline-sync");

var first = readlineSync.question("Please enter your first number. ")

var second = readlineSync.question("Please enter your second number. ")

var num1 = first
var num2 = second

var redlineSync = require("readline-sync"),
    mathOperators = ["add", "sub", "mul", "div"],
    index = readlineSync.keyInSelect(mathOperators, "Please enter the operation to perform: add, sub, mul. div. ");
    console.log("The result is:" + add.sum);

function add(num1, num2) {
    return num1 + num2;
    var sum = add(num1, num2);
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function sub(num1, num2) {
    return num1 - num2;
}