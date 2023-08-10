// Intro

// In this exercise, you will engage in an in-depth exploration of modern JavaScript functions, particularly focusing on the conversion of traditional function expressions and declarations into equivalent arrow functions. This assignment has been carefully designed to enhance your understanding of complex JavaScript concepts such as callbacks, closures, and helper functions.

// 1. Callback Function with Loop
function processArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
    return arr;
}

const processArray = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
    return arr;
};

// 2. Closure with Increment Function
function counter() {
    let count = 0;
    function increment() {
        count++;
        return count;
    }
    return increment;
}

const counter = () => {
    let count = 0;

    const increment = () => {
        count++;
        return count;
    };
    return increment;
};

// 3. Function Using a Helper Function with Loop
function sumOfSquares(numbers) {
    function square(x) {
        return x * x;
    }
    let sum = 0;
    for (let number of numbers) {
        sum += square(number);
    }
    return sum;
}

const sumOfSquares = (numbers) => {
    const square = (x) => x * x;

    let sum = 0;

    for (let number of numbers) {
        sum += square(number);
    }
    return sum;
};

// 4. Function with Multiple Helper Functions
function mathOperations(a, b) {
    function add() {
        return a + b;
    }
    function multiply() {
        return a * b;
    }
    return { add: add, multiply: multiply };
}

const mathOperations = (a, b) => {
    const add = () => a + b;

    const multiply = () => a + b;

    return { add: add, multiply: multiply };
};

// 5. Function with Closure and Callback
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const createMultiplier = (multiplier) => {
    return (number) => number * multiplier;
};

// 6. Function with Multiple Callbacks
function stringManipulation(str, operation1, operation2) {
    return operation2(operation1(str));
}

const stringManipulation = (str, operation1, operation2) =>
    operation2(operation1(str));

// 7. Function with Callback and Loop
function computeAverage(numbers, callback) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return callback(sum / numbers.length);
}

const computeAverage = (numbers, callback) => {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return callback(sum / numbers.length);
};
