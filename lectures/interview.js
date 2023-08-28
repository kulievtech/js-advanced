// (Tohir) Problem-1: Create an Instance to Check if a Palindrome is Possible
/*
  Create a function, isPalindromePossible, that takes a string and returns true if it is possible to rearrange its characters to form a palindrome.
  Input and Output examples:
  "racecar".isPalindromePossible(); // true, as characters can be arranged to form "racecar"
  "aabbcc".isPalindromePossible(); // true, as characters can be arranged to form "abcba"
  "abc".isPalindromePossible(); // 
  "aavgaavg" = aavggvaa"
"aavaavg" = aavgvaa"
*/

function isPalindromePossible(string) {
    let countChar = {};

    let countOdd = 0;

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (countChar[char]) {
            countChar[char]++;
        } else {
            countChar[char] = 1;
        }
    }

    for (const key in countChar) {
        if (countChar[key] % 2 !== 0) {
            countOdd++;
        }

        if (countOdd > 1) {
            return false;
        } else if (countChar[key] % 2 !== 0) {
            return false;
        } else if (countChar[key] % 2 === 0) {
            return true;
        } else if (countOdd === 1) {
            return true;
        }
    }
}

// { a: 2, b: 2, c: 2 }
// { a: 4, v: 2, g: 2 }
// { a: 1, b: 1, c: 1 }
// { a: 4, v: 2, g: 1, z: 1 }

// 0
// 0
// 3
// 2
// 1

console.log(isPalindromePossible("aabbcc"));
console.log(isPalindromePossible("aavgaavg"));
console.log(isPalindromePossible("abc"));
console.log(isPalindromePossible("aavaavgz")); // somehow returning true
console.log(isPalindromePossible("aavaavg"));

// (Pokiza) Problem-2: Create an Instance Method to Shift an Array
/*
  Create an instance method of Array, myShift, that takes a value and pushes it to the beginning of the array without using the unshift method.
  Input and Output examples:
  const arr = [1, 2, 3];
  arr.myShift(4); // [4, 1, 2, 3]
*/

const myUnshift = (arr, value) => {
    arr.push(value);

    for (let i = arr.length - 1; i > 0; i++) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;

        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    }
    return arr;
};

console.log(myUnshift([1, 2, 3]), 4);

// function myUnshift(arr, value) {
//     arr.push(value);

//     const firstElement = arr[0];
//     const lastElement = arr[arr.length - 1];

//     return arr;
// }

// console.log(myUnshift([1, 2, 3], 4));
