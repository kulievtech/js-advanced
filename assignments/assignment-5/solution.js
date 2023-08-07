// Create the Initial Functions: Write four separate functions that take two numbers, num1 and num2, as arguments:
// addTwoNumbers: Adds num1 and num2 and returns a string saying "The result of adding is [result]."
// subtractTwoNumbers: Subtracts num1 from num2 and returns a string saying "The result of subtracting is [result]."
// multiplyTwoNumbers: Multiplies num1 and num2 and returns a string saying "The result of multiplying is [result]."
// divideTwoNumbers: Divides num1 by num2 and returns a string saying "The result of dividing is [result]."

function addTwoNumbers(num1, num2) {
    let result = num1 + num2;
    console.log(`The result of adding is ${result}`);
}

function subtractTwoNumbers(num1, num2) {
    let result = num1 - num2;
    console.log(`The result of subtracting is ${result}`);
}

function multiplyTwoNumbers(num1, num2) {
    let result = num1 * num2;
    console.log(`The result of multiplying is ${result}`);
}

function divideTwoNumbers(num1, num2) {
    let result = num1 / num2;
    console.log(`The result of dividing is ${result}`);
}

function formula(num1, num2, cb) {
    return cb(num1, num2);
}

const addResult = formula(10, 5, addTwoNumbers); // output: "The result of adding is 15"

const subtractResult = formula(10, 5, subtractTwoNumbers); // output: "The result of subtracting is 5"

const multiplyResult = formula(10, 5, multiplyTwoNumbers); // output: "The result of multiplying is 50"

const divideResult = formula(10, 5, divideTwoNumbers); // output: "The result of dividing is 2"
