// Problem 1
// Create a function that doubles the age property of each object in an array

// Input: [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]

// Output: [{ name: 'Alice', age: 60 }, { name: 'Bob', age: 50 }]

const doubleAge = (objectsArray) =>
    objectsArray.map((obj) => ({ name: obj.name, age: obj.age * 2 }));

const input1 = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];

const output1 = doubleAge(input1);
console.log(output1);

// Problem 2
// Create a function that capitalizes the first letter of each string in an array

// Input: ['apple', 'banana']

// Output: ['Apple', 'Banana']

const capitalize = (arr) =>
    arr.map((fruit) => fruit[0].toUpperCase() + fruit.slice(1));

const input2 = ["apple", "banana"];

const output2 = capitalize(input2);
console.log(output2);

// Problem 3
// Create a function that returns the square of the first element of each sub-array

// Input: [[2, 3], [4, 5], [6, 7]]

// Output: [4, 16, 36]

const firstElementSquare = (arr) => arr.map((subArr) => subArr[0] * subArr[0]);

const input3 = [
    [2, 3],
    [4, 5],
    [6, 7]
];

const output3 = firstElementSquare(input3);
console.log(output3);

// Problem 4
// Create a function that concatenates a specific string to each property in an object array

// Input: [{ word: 'cat' }, { word: 'dog' }], string = 's'

// Output: [{ word: 'cats' }, { word: 'dogs' }]

const concatenateString = (arr, str) =>
    arr.map((obj) => ({
        word: obj.word + str
    }));

const input4 = [{ word: "cat" }, { word: "dog" }];
const letterToAdd = "s";

const output4 = concatenateString(input4, letterToAdd);
console.log(output4);

// Problem 5
// Create a function that calculates the price with tax for each product object

// Input: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 1 }], tax = 0.1

// Output: [{ name: 'Book', price: 22 }, { name: 'Pen', price: 1.1 }]

const calculateWithTax = (arr, tax) =>
    arr.map((obj) => ({ name: obj.name, price: obj.price + obj.price * tax }));

const input5 = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 1 }
];
const tax = 0.1;

const output5 = calculateWithTax(input5, tax);
console.log(output5);
