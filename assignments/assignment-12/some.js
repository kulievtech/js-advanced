// Some Problems

// Problem 1
// Create a function that checks if any object in an array contains a null value

// Input: [{ value: 3 }, { value: null }]

// Output: true

const doesArrayContainNullValue = (arr) =>
    arr.some((obj) => obj.value === null);

const input1 = [{ value: 3 }, { value: null }];

const output1 = doesArrayContainNullValue(input1);

console.log(output1);

// Problem 2
// Create a function that checks if any element in a matrix is a specific value

// Input: [[1, 2], [3, 4]], value = 4

// Output: true

const doesArrayContainSpecificValue = (arr, value) =>
    arr.some((subArr) => subArr.some((number) => number === value));

const input2 = [
    [1, 2],
    [3, 4]
];
const specificValue = 4;

const output2 = doesArrayContainSpecificValue(input2, specificValue);

console.log(output2);

// Problem 3
// Create a function that checks if any object in an array has a property with a specific length

// Input: [{ word: 'cat' }, { word: 'elephant' }], length = 8

// Output: true

const doesArrayContainSpecificLength = (arr, length) =>
    arr.some((obj) => obj.word.length === length);

const input3 = [{ word: "cat" }, { word: "elephant" }];
const specificLength = 8;

const output3 = doesArrayContainSpecificLength(input3, specificLength);

console.log(output3);

// Problem 4
// Create a function that checks if any sub-array contains a specific number

// Input: [[1, 2], [3, 4, 5]], number = 8

// Output: true

const doesArrayContainSpecificNumber = (arr, specificNumber) =>
    arr.some((subArr) => subArr.some((number) => number === specificNumber));

const input4 = [
    [1, 2],
    [3, 4, 5]
];

const specificNumber = 8;

const output4 = doesArrayContainSpecificNumber(input4, specificNumber);

console.log(output4);

// Problem 5
// Create a function that checks if any date in an array of objects is after a specific date

// Input: [{ date: '2023-01-01' }, { date: '2023-01-04' }], date = '2023-01-02'

// Output: true

const doesArrayContainADateAfterSpecificDate = (arr, date) =>
    arr.some((obj) => obj.date < date);

const input5 = [{ date: "2023-01-01" }, { date: "2023-01-04" }];
const specificDate = "2023-01-02";

const output5 = doesArrayContainADateAfterSpecificDate(input5, specificDate);

console.log(output5);
