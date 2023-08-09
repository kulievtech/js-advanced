// create a function that takes a number, it generates some random number multiplied by 10. It returns another function that compares the argument and the random number. It returns true if the random number is greater than the argument number;

function compare(num) {
    let randomNumber = Math.random() * 10;

    return function () {
        return randomNumber > num;
    };
}

console.log(compare(10)());

// adjust the exercise a bit

function compare(randomNum1) {
    return function (randomNum2) {
        return randomNum2 > randomNum1;
    };
}

const isGreater = compare(Math.random());

console.log(isGreater(Math.random()));

// create a function that takes num1, and returns another function that takes num2 as argument, that also returns final function that takes num3 that return num1 + num2 + num3

function func1(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3;
        };
    };
}

// const func2 = func1(5);
// const func3 = func2(5);
// console.log(func3(10));

const result = func1(5)(5)(10);
console.log(result);
