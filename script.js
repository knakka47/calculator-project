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

/*
Operate Function
*/

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
        default:
            throw new Error("Unknown operator");
    }
}

console.log(operate("*", 5, 5));

/*
Populate Display with Numbers
*/

document.addEventListener("DOMContentLoaded", function () {
    // This variable will keep the current value to be displayed
    let displayValue = '';

    // Get the display element
    const display = document.getElementById('display');

    // Function to update the display
    function updateDisplay(value) {
        displayValue += value;
        display.textContent = displayValue;
    }

    // Get all the number buttons and attach click events to them
    const numberButtons = document.querySelectorAll('.button:not(#clear):not(#equals)');
    numberButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            updateDisplay(button.textContent);
        });
    });

    // Clear button functionality
    const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', function () {
        displayValue = '';
        display.textContent = displayValue;
    });

    // Variables to keep track of the first number, operator, and second number
    let currentFirstNumber = null;
    let currentOperator = null;
    let awaitingSecondNumber = false;

    // Function to handle an operator button click
    function handleOperator(op) {
        if (!awaitingSecondNumber) {
            currentFirstNumber = parseFloat(displayValue);
            displayValue = ''; // Clear the display for the next number
            currentOperator = op;
            awaitingSecondNumber = true;
        }
    }

    // Function to perform the calculation and update the display
    function performCalculation() {
        if (currentFirstNumber !== null && currentOperator && displayValue !== '') {
            const currentSecondNumber = parseFloat(displayValue);
            const result = operate(currentOperator, currentFirstNumber, currentSecondNumber);
            display.textContent = result; // Display the result
            displayValue = result.toString(); // Convert result back to string for potential further calculation
            // Reset
            currentFirstNumber = null;
            currentOperator = null;
            awaitingSecondNumber = false;
        }
    }

    // Attach the handleOperator function to operator buttons
    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => handleOperator(button.textContent));
    });

    // Attach the performCalculation function to the equals button
    document.getElementById('equals').addEventListener('click', performCalculation);

});
