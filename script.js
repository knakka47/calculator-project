/*
Basic Functions
*/

// Adds two numbers
function add(a, b) {
    return a + b;
}

// Subtracts the second number from the first
function subtract(a, b) {
    return a - b;
}

// Multiplies two numbers
function multiply(a, b) {
    return a * b;
}

// Divides the first number by the second number
function divide(a, b) {
    // Check if the divisor is zero to avoid division by zero error
    if (b === 0) {
        console.error("Cannot divide by zero.");
        return undefined;
    }
    return a / b;
}

/*
Calculator Variables
*/

let firstNumber = 3;    // Variable for the first number
let operator = '+';     // Variable for the operator
let secondNumber = 5;   // Variable for the second number

console.log(multiply(4, 5));
