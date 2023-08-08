// part 1

function filterOddNumbers(array) {
    const oddNumArray = [];

    for (let i = 0; i < array.length; i++) {
        const num = array[i];

        if (num % 2 !== 0) {
            oddNumArray.push(num);
        }
    }
    return oddNumArray;
}

console.log(filterOddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]

function filterDivisibleByThree(array) {
    const numbersDivByThreeArray = [];

    for (let i = 0; i < array.length; i++) {
        const num = array[i];

        if (num % 3 === 0) {
            numbersDivByThreeArray.push(num);
        }
    }
    return numbersDivByThreeArray;
}

console.log(filterDivisibleByThree([3, 6, 7, 9, 12])); // Output: [3, 6, 9, 12]

function isPrimeNumber(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function filterPrimeNumbers(array) {
    const onlyPrimeNumbersArray = [];

    for (let i = 0; i < array.length; i++) {
        const num = array[i];

        if (isPrimeNumber(num)) {
            onlyPrimeNumbersArray.push(num);
        }
    }
    return onlyPrimeNumbersArray;
}

console.log(filterPrimeNumbers([2, 3, 4, 5, 6])); // Output: [2, 3, 5] )

function isPerfectSquare(number) {
    const sqrt = Math.sqrt(number);
    return Math.floor(sqrt) === sqrt;
}

function filterPerfectSquares(array) {
    const perfectSquaresArray = [];

    for (let i = 0; i < array.length; i++) {
        const num = array[i];

        if (isPerfectSquare(num)) {
            perfectSquaresArray.push(num);
        }
    }
    return perfectSquaresArray;
}

console.log(filterPerfectSquares([1, 4, 5, 9, 16])); // Output: [1, 4, 9, 16] );

// USING CALLBACK NOW !!!

function filterArray(array, callback) {
    const filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        const number = array[i];

        if (callback(number)) {
            filteredArray.push(number);
        }
    }
    return filteredArray;
}

function isOdd(number) {
    return number % 2 !== 0;
}

function isDivisibleByThree(number) {
    return number % 3 === 0;
}

function isPrimeNumber(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function isPerfectSquare(number) {
    const sqrt = Math.sqrt(number);
    return Math.floor(sqrt) === sqrt;
}

const arrayInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 16, 20];

console.log(filterArray(arrayInput, isOdd));
console.log(filterArray(arrayInput, isDivisibleByThree));
console.log(filterArray(arrayInput, isPrimeNumber));
console.log(filterArray(arrayInput, isPerfectSquare));

// part 2
