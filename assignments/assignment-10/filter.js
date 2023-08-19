// Problem 1:
// Create a function that filters objects with a specific property value

// Input: [{ type: 'fruit', name: 'apple' }, { type: 'vegetable', name: 'carrot' }], type = 'fruit'

// Output: [{ type: 'fruit', name: 'apple' }]

const filterBySpecifiedValue = (arr, type) =>
    arr.filter((obj) => obj.type === type);

const input1 = [
    { type: "fruit", name: "apple" },
    { type: "vegetable", name: "carrot" }
];

const type = "fruit";

const output1 = filterBySpecifiedValue(input1, type);

console.log(output1);

// Problem 2
// Create a function that filters all sub-arrays with a specific length

// Input: [[1, 2], [3, 4, 5]], length = 2

// Output: [[1, 2]]

const filterBySpecificLength = (arr, length) =>
    arr.filter((subArr) => subArr.length === length);

const input2 = [
    [1, 2],
    [3, 4, 5]
];

const length = 2;

const output2 = filterBySpecificLength(input2, length);

console.log(output2);

// Problem 3
// Create a function that filters products with a price within a specific range

// Input: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }], min = 15, max = 20

// Output: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }]

const filterByPriceRange = (arr, min, max) =>
    arr.filter((obj) => obj.price >= min && obj.price <= max);

const input3 = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 15 },
    { name: "Pencil", price: 12 },
    { name: "Eraser", price: 25 }
];

const minValue = 15;
const maxValue = 20;

const output3 = filterByPriceRange(input3, minValue, maxValue);

console.log(output3);

// Problem 4
// Create a function that filters words that start with a specific letter from an array of objects

// Input: [{ word: 'cat' }, { word: 'dog' }], letter = 'c'

// Output: [{ word: 'cat' }]

const filterBySpecifiedLetter = (arr, letter) =>
    arr.filter((obj) => obj.word[0].toLowerCase().startsWith(letter));

const input4 = [{ word: "cat" }, { word: "dog" }];

const specifiedLetter = "c".toLocaleLowerCase();

const output4 = filterBySpecifiedLetter(input4, specifiedLetter);

console.log(output4);

// Problem 5
// Create a function that filters dates before a specific date from an array of objects

// Input: [{ date: '2023-01-01' }, { date: '2023-01-02' }], date = '2023-01-02'

// Output: [{ date: '2023-01-02' }]

const filterBySpecifiedDate = (arr, date) =>
    arr.filter((obj) => obj.date === date);

const input5 = [{ date: "2023-01-01" }, { date: "2023-01-02" }];

const specifiedDate = "2023-01-02";

const output5 = filterBySpecifiedDate(input5, specifiedDate);

console.log(output5);
