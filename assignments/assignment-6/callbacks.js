// part 1
//In this part of the assignment, you'll work with four different problems, each dealing with array manipulation and numerical conditions. Initially, you'll solve these problems by writing specific functions for each scenario. After completing the solutions, you'll analyze your code to identify repetitive patterns and common logic. Your task will then be to refactor the solutions by using generic functions and callbacks, promoting code reusability and maintainability.

// Odd Numbers Filter
// Write a function named filterOddNumbers that takes an array of numbers and returns a new array that has only odd numbers.

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

// console.log(filterOddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]

// Numbers Divisible by Three
// Write a function named filterDivisibleByThree that takes an array of numbers and returns a new array that contains numbers that are divisible by 3.

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

// console.log(filterDivisibleByThree([3, 6, 7, 9, 12])); // Output: [3, 6, 9, 12]

// Prime Numbers Filter
// Write a function named filterPrimeNumbers that takes an array of numbers and returns a new array that contains only prime numbers.

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

// console.log(filterPrimeNumbers([2, 3, 4, 5, 6])); // Output: [2, 3, 5] )

// Perfect Squares Filter
// Write a function named filterPerfectSquares that takes an array of numbers and returns a new array that has perfect squares.

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

// console.log(filterPerfectSquares([1, 4, 5, 9, 16])); // Output: [1, 4, 9, 16] );

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

console.log(filterArray(arrayInput, isOdd)); // output: [ 1, 3, 5, 7, 9, 11 ]
console.log(filterArray(arrayInput, isDivisibleByThree)); // output: [ 3, 6, 9, 12 ]
console.log(filterArray(arrayInput, isPrimeNumber)); // output: [ 2, 3, 5, 7, 11 ]
console.log(filterArray(arrayInput, isPerfectSquare)); // output: [ 1, 4, 9, 16 ]

// part 2
// In this assignment, you will be working on four different problems. Each problem will require you to write a function that processes an array of strings according to specific criteria. Initially, you should solve the problems using your current understanding of JavaScript. After that, analyze your solutions and look for patterns that can be refactored using callbacks and generic functions. Let's dive into the problems!

// Palindrome Strings
// Write a function named filterPalindromes that takes an array of strings and returns a new array containing only those strings that are palindromes.

function isPalindrome(word) {
    const lowerCaseWord = word.toLowerCase();
    return lowerCaseWord === lowerCaseWord.split("").reverse().join("");
}

function filterPalindromes(array) {
    const onlyPalindromeStringArray = [];

    for (let i = 0; i < array.length; i++) {
        const string = array[i];
        if (isPalindrome(string)) {
            onlyPalindromeStringArray.push(string);
        }
    }
    return onlyPalindromeStringArray;
}

// console.log(filterPalindromes(["racecar", "madam", "apple"])); // Output: ["racecar", "madam"] );

// Lowercase Strings Only
// Write a function named filterLowercase that takes an array of mixed lowercase and uppercase lettered words. Return a new array that contains only strings that are entirely lowercase.

function isLowerCase(string) {
    const lowerCased = string.toLowerCase();
    return lowerCased === string;
}

function filterLowercase(array) {
    const onlyLowerCaseStringArray = [];

    for (let i = 0; i < array.length; i++) {
        const string = array[i];

        if (isLowerCase(string)) {
            onlyLowerCaseStringArray.push(string);
        }
    }
    return onlyLowerCaseStringArray;
}

// console.log(filterLowercase(["apple", "Banana", "cherry"])); // Output: ["apple", "cherry"] );

// Consonant Lettered Words
// Write a function named filterConsonantWords that takes an array of strings and returns a new array of strings that have only consonant letters.

function isConsonantWord(word) {
    const vowels = "aeiou";
    for (let i = 0; i < word.length; i++) {
        const eachLetterOfWord = word[i].toLowerCase();
        if (vowels.includes(eachLetterOfWord)) {
            return false;
        }
    }
    return true;
}

function filterConsonantWords(array) {
    let consonantWordArray = [];

    for (let i = 0; i < array.length; i++) {
        const string = array[i];

        if (isConsonantWord(string)) {
            consonantWordArray.push(string);
        }
    }
    return consonantWordArray;
}

// console.log(filterConsonantWords(["rhythm", "sky", "fly", "apple"])); // Output: ["rhythm", "sky", "fly"] ));

function isOneVowelWord(word) {
    let countOfVowelWord = 0;
    const vowels = "aeiou";

    for (let i = 0; i < word.length; i++) {
        const eachLetterOfWord = word[i].toLowerCase();

        if (vowels.includes(eachLetterOfWord)) {
            countOfVowelWord++;
            if (countOfVowelWord > 1) {
                return false;
            }
        }
    }
    return countOfVowelWord === 1;
}

function filterOneVowelWords(array) {
    let oneVowelWordArray = [];

    for (let i = 0; i < array.length; i++) {
        const string = array[i];

        if (isOneVowelWord(string)) {
            oneVowelWordArray.push(string);
        }
    }

    return oneVowelWordArray;
}

// console.log(filterOneVowelWords(["cat", "dog", "apple"])); // Output: ["cat", "dog"]

// USING CALLBACK NOW !!!

function filterArray1(array, callback) {
    const filteredArray1 = [];

    for (let i = 0; i < array.length; i++) {
        const string = array[i];

        if (callback(string)) {
            filteredArray1.push(string);
        }
    }
    return filteredArray1;
}

function isPalindrome(word) {
    const lowerCaseWord = word.toLowerCase();
    return lowerCaseWord === lowerCaseWord.split("").reverse().join("");
}

function isLowerCase(string) {
    const lowerCased = string.toLowerCase();
    return lowerCased === string;
}

function isConsonantWord(word) {
    const vowels = "aeiou";
    for (let i = 0; i < word.length; i++) {
        const eachLetterOfWord = word[i].toLowerCase();
        if (vowels.includes(eachLetterOfWord)) {
            return false;
        }
    }
    return true;
}

function isOneVowelWord(word) {
    let countOfVowelWord = 0;
    const vowels = "aeiou";

    for (let i = 0; i < word.length; i++) {
        const eachLetterOfWord = word[i].toLowerCase();

        if (vowels.includes(eachLetterOfWord)) {
            countOfVowelWord++;
            if (countOfVowelWord > 1) {
                return false;
            }
        }
    }
    return countOfVowelWord === 1;
}

const arrayInput1 = [
    "fly",
    "Apple",
    "Banana",
    "sky",
    "hi",
    "Elephant",
    "Cat",
    "dog",
    "Racecar",
    "madam"
];

console.log(filterArray1(arrayInput1, isPalindrome)); // output: [ 'Racecar', 'madam' ]
console.log(filterArray1(arrayInput1, isLowerCase)); // output: [ 'fly', 'sky', 'hi', 'dog', 'madam' ]
console.log(filterArray1(arrayInput1, isConsonantWord)); // output: [ 'fly', 'sky' ]
console.log(filterArray1(arrayInput1, isOneVowelWord)); // output: [ 'hi', 'Cat', 'dog' ]
