// String.prototype Assignment:

// 1. Write a method reverse() for String.prototype that returns a reversed version of the string. For example, "Hello".reverse() should return "olleH".

const str = "hello";

String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};

console.log(str.reverse()); // output: "olleh"

// 2. Write a method removeVowels() for String.prototype that removes all vowels from the string. For example, "Hello".removeVowels() should return "Hll".

String.prototype.removeVowels = function () {
    const vowels = "AaEeIiOoUu";
    let result = "";
    for (let i = 0; i < this.length; i++) {
        if (!vowels.includes(this[i])) {
            result = result + this[i];
        }
    }
    return result;
};

const str1 = "Javascript";

console.log(str1.removeVowels()); // output: "Jvscrpt"

// 3. Write a method countWords() for String.prototype that counts the number of words in a string. For example, "Hello World".countWords() should return 2.

String.prototype.countWords = function () {
    return this.split(" ").length;
};

const str2 = "New York City is famous in the world!";

console.log(str2.countWords()); // output: 8

// 4. Write a method wrapInTags(tag) for String.prototype that wraps the string in the given HTML tag. For example, "Hello".wrapInTags("b") should return "<b>Hello</b>".

String.prototype.wrapInTags = function (tag) {
    return `<${tag}>${this}</${tag}>`;
};

const str3 = "Welcome To Our Shop!";

console.log(str3.wrapInTags("h2")); // output: "<h2>Welcome To Our Shop!</h2>"

// 5. Write a method isPalindrome() for String.prototype that checks if the string is a palindrome (same forwards as backwards, ignoring case). For example, "racecar".isPalindrome() should return true, but "Hello".isPalindrome() should return false.

String.prototype.isPalindrome = function () {
    const lowerCase = this.toLowerCase();
    return lowerCase === lowerCase.split("").reverse().join("");
};

const str4 = "Level";
const str5 = "racecar";
const str6 = "Bottle";

console.log(str4.isPalindrome()); // output: true
console.log(str5.isPalindrome()); // output: true
console.log(str6.isPalindrome()); // output: false

// Number.prototype Assignment:

// 1. Write a method isPrime() for Number.prototype that checks if the number is a prime number. For example, (7).isPrime() should return true, but (4).isPrime() should return false.

Number.prototype.isPrime = function () {
    if (this < 2) {
        return false;
    }
    for (let i = 2; i < this; i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
};

const num1 = 7;
const num2 = 4;

console.log(num1.isPrime()); // output: true
console.log(num2.isPrime()); // output: false

// 2. Write a method toFactorial() for Number.prototype that returns a factorial of the given number. For example 5 should return 120 or 3 should return 6.

Number.prototype.toFactorial = function () {
    if (this === 0 || this === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= this; i++) {
        result = result * i;
    }
    return result;
};

const num3 = 4;
const num4 = 3;

console.log(num3.toFactorial()); // output: 24
console.log(num4.toFactorial()); // output: 6

// 3. Write a method findFactors() for Number.prototype that returns an array of all factors of the number. For example, (10).findFactors() should return [1, 2, 5, 10].

Number.prototype.findFactors = function () {
    let result = [];
    for (let i = 0; i <= this; i++) {
        if (this % i === 0) {
            result.push(i);
        }
    }
    return result;
};

const num5 = 10;
const num6 = 23;

console.log(num5.findFactors()); // output: [ 1, 2, 5, 10 ]
console.log(num6.findFactors()); // output: [ 1, 23 ]

// 4. Write a method isPerfectSquare() for Number.prototype that checks if the number is a perfect square. For example, (9).isPerfectSquare() should return true, but (8).isPerfectSquare() should return false.

Number.prototype.isPerfectSquare = function () {
    if (this < 0) {
        return false;
    }

    const squareRoot = Math.sqrt(this);
    return Number.isInteger(squareRoot);
};

const num7 = 9;
const num8 = 8;
const num9 = 64;
const num10 = 50;

console.log(num7.isPerfectSquare()); // output: true
console.log(num8.isPerfectSquare()); // output: false
console.log(num9.isPerfectSquare()); // output: true
console.log(num10.isPerfectSquare()); // output: false

// 5. Write a method isOdd() for Number.prototype that returns true if the number is odd and false if not. For example, 8 is true but 11 is false.

Number.prototype.isOdd = function () {
    if (this % 2 === 0) {
        return false;
    }
    return true;
};

const num11 = 8;
const num12 = 11;

console.log(num11.isOdd()); // output: false
console.log(num12.isOdd()); // output: true

// Array.prototype Assignment:

// 1. Write a method findMax() for Array.prototype that returns the maximum value in an array of numbers. For example, [1, 2, 3].findMax() should return 3.

Array.prototype.findMax = function () {
    let maxValue = this[0];
    for (let i = 0; i < this.length; i++) {
        if (maxValue < this[i]) {
            maxValue = this[i];
        }
    }
    return maxValue;
};

const arr1 = [7, 2, 5, 3];

console.log(arr1.findMax()); // output: 7

// 2. Write a method findMin() for Array.prototype that returns the minimum value in an array of numbers. For example, [1, 2, 3].findMin() should return 1.

Array.prototype.findMin = function () {
    let minValue = this[0];
    for (let i = 0; i < this.length; i++) {
        if (minValue > this[i]) {
            minValue = this[i];
        }
    }
    return minValue;
};

const arr2 = [100, 47, 38, 2, 10, 3, 22, 50, 5];

console.log(arr1.findMin()); // output: 2

// 3. Write a method average() for Array.prototype that returns the average of all the numbers in the array. For example, [1, 2, 3, 4].average() should return 2.5.

Array.prototype.average = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum = sum + this[i];
    }
    return sum / this.length;
};

const arr3 = [1, 2, 3, 4];

console.log(arr3.average()); // output: 2.5

// 4. Write a method removeDuplicates() for Array.prototype that returns a new array with duplicates removed. For example, [1, 2, 2, 3].removeDuplicates() should return [1, 2, 3].

Array.prototype.removeDuplicates = function () {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        if (!result.includes(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
};

const arr4 = [10, 10, 32, 11, 45, 60, 11, 45, 69];

console.log(arr4.removeDuplicates()); // output: [ 10, 32, 11, 45, 60, 69 ]

// 5. Write a method shuffle() for Array.prototype that returns a new array with the order of the elements randomized.

Array.prototype.shuffleArray = function () {
    const shuffleArray = this.slice();

    for (let i = shuffleArray.length - 1; i > 0; i--) {
        const randomIdx = Math.floor(Math.random() * (i + 1));

        [shuffleArray[i], shuffleArray[randomIdx]] = [
            shuffleArray[randomIdx],
            shuffleArray[i]
        ];
    }
    return shuffleArray;
};

const arr5 = [50, 40, 30, 20, 10];

console.log(arr5.shuffleArray()); // output: different when run each time
