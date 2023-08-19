// Every Problems

// Problem 1
// Create a function that checks if all objects have a specific property

// Input: [{ name: 'Alice' }, { name: 'Bob' }], property = 'name'

// Output: true

const doesObjHaveSpecificProperty = (arr, property) =>
    arr.every((obj) => property in obj);

const input1 = [{ name: "Alice" }, { name: "Bob" }];

const objSpecificProperty = "name";

const output1 = doesObjHaveSpecificProperty(input1, objSpecificProperty);

console.log(output1);

// Problem 2
// Create a function that checks if all elements in a matrix are positive

// Input: [[1, 2], [3, 4]]

// Output: true

const isAllElementsPositive = (arr) =>
    arr.every((subArr) => subArr.every((number) => number > 0));

const input2 = [
    [1, 2],
    [3, 4]
];

const output2 = isAllElementsPositive(input2);

console.log(output2);

// Problem 3
// Create a function that checks if all sub-arrays have a specific length

// Input: [[1, 2], [3, 4]], length = 2

// Output: true

const isLengthTheSame = (arr, length) =>
    arr.every((subArr) => subArr.length === length);

const input3 = [
    [1, 2],
    [3, 4],
    [3, 4, 5]
];

const length = 2;

const output3 = isLengthTheSame(input3, length);

console.log(output3);

// Problem 4
// Create a function that checks if all dates in an array of objects are before a specific date

// Input: [{ date: '2023-01-01' }, { date: '2023-01-02' }], date = '2023-01-03'

// Output: true

const isBeforeSpecificDate = (arr, date) => arr.every((obj) => obj.date < date);

const input4 = [{ date: "2023-01-01" }, { date: "2023-01-02" }];

const date = "2023-01-03";

const output4 = isBeforeSpecificDate(input4, date);

console.log(output4);

// Problem 5
// Create a function that checks if all products have a price greater than a specific value

// Input: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }], price = 10

// Output: true

const isPriceGreaterThanSpecificValue = (arr, price) =>
    arr.every((obj) => obj.price > price);

const input5 = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 15 }
];

const specificPriceValue = 10;

const output5 = isPriceGreaterThanSpecificValue(input5, specificPriceValue);

console.log(output5);
