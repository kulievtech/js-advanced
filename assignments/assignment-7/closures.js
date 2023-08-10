// Easy Problems

// 1. Counter Function
// Task: Write a function createCounter() that returns a function. The returned function should increment a count and return it every time it's called.

// const counter = createCounter();
// counter(); // 1
// counter(); // 2

// Explanation: This example demonstrates closures by utilizing a variable within the parent function that the child function has access to. Every time you call the returned function, it continues to have access to the count variable.

function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // output: 1
console.log(counter()); // output: 2

// 2. Temperature Converter
// Task: Write a function temperatureConverter(unit) that takes a unit ('C' or 'F') and returns a function to convert temperatures to that unit.

// const toCelsius = temperatureConverter('C');
// toCelsius(32); // 0
// Explanation: Here, the closure is preserving the unit variable that allows the inner function to know whether to convert to Celsius or Fahrenheit.

function temperatureConverter(unit) {
    return function (temp) {
        if (unit === "C") {
            return (5 / 9) * (temp - 32);
        } else if (unit === "F") {
            return temp * (9 / 5) + 32;
        }
    };
}

const toCelsius = temperatureConverter("C");
console.log(toCelsius(32)); // output: 0
const toFahrenheit = temperatureConverter("F");
console.log(toFahrenheit(0)); // output: 32

// 3. Greeting Generator
// Task: Write a function greet(name) that returns a function to generate customized greetings for the provided name.

// const greetJohn = greet('John');
// greetJohn('Morning'); // 'Good Morning, John!'
// Explanation: The inner function maintains access to the name variable and uses it to generate custom greetings.

function greet(name) {
    return function (timesOfDay) {
        console.log(`Good ${timesOfDay} ${name}!`);
    };
}

const greetJohn = greet("John");
greetJohn("Morning"); // output: "Good Morning John!"

// 4. Interest Calculation
// Task: Write a function interestCalculator(rate) that takes an interest rate and returns a function to calculate the interest for a given amount.

// const simpleInterest = interestCalculator(5);
// simpleInterest(1000); // 50
// Explanation: This example illustrates how a closure can maintain state information like the interest rate across multiple calls.

function interestCalculator(rate) {
    return function (principal) {
        return (rate / 100) * principal;
    };
}

const simpleInterest = interestCalculator(5);
console.log(simpleInterest(1000)); // output: 50
console.log(simpleInterest(4000)); // output: 200
console.log(simpleInterest(7000)); // output: 350

// 5. Multiplier Function
// Task: Write a function multiplier(factor) that takes a factor and returns a function to multiply any number by that factor.

// const double = multiplier(2);
// double(5); // 10

// Explanation: Here, the closure is retaining the factor information, allowing the inner function to utilize it for multiplication.

function multiplier(factor) {
    return function (anyNum) {
        return factor * anyNum;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // output: 10
console.log(triple(5)); // output: 15

// Medium Problems

// 1. Double Multiplier:
// Task: Extend the multiplier function to take two factors and return a function to multiply any number by those factors.

// const doubleAndTriple = doubleMultiplier(2, 3);
// doubleAndTriple(5); // 30
// Explanation: This is a step up from the easy problems as it utilizes two closures to remember both factors.

function doubleMultiplier(factor1, factor2) {
    return function (anyNum) {
        return anyNum * factor1 * factor2;
    };
}

const doubleAndTriple = doubleMultiplier(2, 3);
console.log(doubleAndTriple(5)); // output: 30

// 2. Sequential Greetings
// Task: Create a function that takes a name and returns a series of functions for different greeting times (morning, evening, etc.)

// const johnGreeting = sequentialGreet('John');
// johnGreeting.morning(); // 'Good Morning, John!'
// johnGreeting.evening(); // 'Good Evening, John!'
// Explanation: This problem involves defining multiple functions within a parent function, demonstrating how each can have access to the outer function's variables.

// function sequentialGreet(name) {
//     return function () {
//         return {
//             morning: `Good Morning, ${this.name}`,
//             afternoon: `Good Afternoon, ${this.name}`,
//             evening: `Good Evening, ${this.name}`
//         };
//     };
// }

// function sequentialGreet(name) {
//     return function () {
//         return (obj = {
//             morning: `Good Morning, ${this.name}`,
//             afternoon: `Good Afternoon, ${this.name}`,
//             evening: `Good Evening, ${this.name}`
//         });
//     };
// }

function sequentialGreet(name) {
    return {
        morning: function () {
            console.log(`Good Morning, ${name}!`);
        },
        afternoon: function () {
            console.log(`Good Afternoon, ${name}!`);
        },
        evening: function () {
            console.log(`Good Evening, ${name}!`);
        }
    };
}

const johnGreeting = sequentialGreet("John");
johnGreeting.morning(); // output: "Good Morning, John!""
johnGreeting.afternoon(); // output: "Good Afternoon, John!""
johnGreeting.evening(); // output: "Good Evening, John!""

// 3. Personal Library
// Task: Create a function that returns an object with methods to add, remove, and list books in a personal library.

// const myLibrary = personalLibrary();
// myLibrary.add('The Nation');
// myLibrary.list(); // ['The Nation']
// Explanation: This example uses closures to maintain a private state that represents the personal library, allowing manipulation through specific methods.

function personalLibrary() {
    const books = [];

    return {
        add: function (book) {
            books.push(book);
        },
        remove: function (book) {
            for (let i = 0; i < books.length; i++) {
                if (books[i] === book) {
                    books.splice(i, 1);
                    break; // Remove only the first occurrence
                }
            }
        },
        list: function () {
            return books;
        }
    };
}

const myLibrary = personalLibrary();
myLibrary.add("Hello kids!");
myLibrary.add("The Nation");
myLibrary.add("The Best Word");
console.log(myLibrary.list()); // output: [ 'Hello kids!', 'The Nation', 'The Best Word' ] --- before removing

myLibrary.remove("Hello kids!");
console.log(myLibrary.list()); // output: [ 'The Nation', 'The Best Word' ]   ---- after removing

// 4. Multiplication Table Generator
// Task: Write a function that returns a function to generate multiplication tables for any given number.

// const tableOfThree = multiplicationTable(3);
// tableOfThree(); // [3, 6, 9, ... , 30]
// Explanation: Here, the closure retains the number for which the multiplication table needs to be generated.

function multiplicationTable(number) {
    return function () {
        const table = [];
        for (let i = 1; i <= 10; i++) {
            table.push(number * i);
        }
        return table;
    };
}

const tableOfThree = multiplicationTable(3);
console.log(tableOfThree()); // output:[ 3,  6,  9, 12, 15, 18, 21, 24, 27, 30 ]

// 5. Favorite Color Reminder:
// Task: Write a function that takes a person's name and favorite color and returns a function to remind you of that person's favorite color.

// const johnsColor = favoriteColorReminder('John', 'Blue');
// johnsColor(); // 'John's favorite color is Blue.'
// Explanation: This problem demonstrates a closure that remembers both the name and favorite color, and uses them later when the returned function is invoked.

function favoriteColorReminder(name, favColor) {
    return function () {
        console.log(`${name}'s favorite color is ${favColor}.`);
    };
}

const johnsColor = favoriteColorReminder("John", "Blue");
johnsColor(); // output: "John's favorite color is Blue".
