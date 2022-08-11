var readline = require("readline-sync")

var num1 = parseInt(readline.question("Please enter your first number: "));
var num2 = parseInt(readline.question("Please enter your second number: "));

function add(num1, num2) {
    return num1 + num2
};
function sub(num1, num2) {
    return num1 - num2
};
function mul(num1, num2) {
    return num1 * num2
};
function div(num1, num2) {
    return num1 /= num2
};

var operation = readline.question("Please enter the operation to perform: add, sub, mul, div: ")
    if(operation == "add") {
        console.log("The result is: " + add(num1, num2));
    } else if(operation == "sub") {
        console.log("The result is: " + sub(num1, num2));
    } else if(operation = "mul") {
        console.log("The result is: " + mul(num1, num2));
    } else if(operation = "div") {
        console.log("The results is: " + div(num1, num2));
    } else {
        console.log("Please enter the operation to perform: add, sub, mul, div: ")
    }