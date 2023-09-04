// Tasks

const fs = require("fs");
const { connect } = require("http2");
const { v4: uuid } = require("uuid");

class Person {
    constructor(id, firstName, lastName, lastDigitOfSSN, expenses, incomes) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.lastDigitOfSSN = lastDigitOfSSN;
        this.expenses = expenses;
        this.incomes = incomes;
    }
}

class DataAnalyzer {
    read() {
        const content = fs.readFileSync("data.json", "utf-8");
        return JSON.parse(content);
    }

    updateAll(data) {
        fs.writeFileSync("data.json", JSON.stringify(data));
    }

    assignUniqueIds() {
        const content = this.read();
        for (const person in content) {
            content[person].id = uuid();
        }
        this.updateAll(content);
    }

    addUtilitiesExpenses() {
        const content = this.read();
        for (const person in content) {
            const { expenses } = content[person];

            for (const month in expenses) {
                const randomUtilityAmount =
                    Math.floor(Math.random() * (200 - 75 + 1)) + 75;
                expenses[month].utilities = randomUtilityAmount;
            }
        }
        this.updateAll(content);
    }

    removeLastDigitOfSSN() {
        const content = this.read();

        for (const person in content) {
            delete content[person].lastDigitOfSSN;
        }
        this.updateAll(content);
    }

    renameAndReduceIncomes() {
        const content = this.read();

        for (const id in content) {
            const person = content[id];
            person.netIncomes = {};
            for (const month in person.incomes) {
                person.netIncomes[month] = person.incomes[month] * 0.75;
            }
            delete person.incomes;
        }
        this.updateAll(content);
    }

    calculateAndAddTotalExpenses() {
        const content = this.read();

        let totalExpenseSum = 0;

        for (const id in content) {
            const person = content[id];

            const monthlyExpenses = person.expenses;

            for (const expense in monthlyExpenses) {
                totalExpenseSum += monthlyExpenses[expense];
            }
            person.totalExpenses = totalExpenseSum;
        }

        this.updateAll(content);
    }
}

const person1 = new DataAnalyzer();
console.log(person1.assignUniqueIds());
console.log(person1.addUtilitiesExpenses());
console.log(person1.removeLastDigitOfSSN());
console.log(person1.renameAndReduceIncomes());
console.log(person1.calculateAndAddTotalExpenses());

// console.log(person1.read());

// Before you start, make sure you have a basic understanding of JavaScript, JSON, and file handling using the fs module. You will be required to create a class name DataAnalyzer and methods that perform specific tasks on the provided financial data.

// Task 1: Assign Unique IDs
// Implement a method named assignUniqueIds within the DataAnalyzer class.
// Iterate through each person's data and assign a unique UUID (Universally Unique Identifier) to their id field.
// After implementing the method, remember to save the changes.

// Task 2: Add Utilities Expenses
// Implement a method named addUtilitiesExpenses within the DataAnalyzer class.
// Generate a random integer between 75 and 200.
// For each person's expenses in each month, add the generated random value to the utilities field.
// After implementing the method, remember to save the changes.

// Task 3: Remove lastDigitOfSSN
// Implement a method named removeLastDigitOfSSN within the DataAnalyzer class.
// Iterate through each person's data and remove the lastDigitOfSSN field.
// After implementing the method, remember to save the changes.

// Task 4: Rename and Reduce Incomes
// Implement a method named renameAndReduceIncomes within the DataAnalyzer class.
// Rename the incomes field to netIncomes and reduce each person's income by 25%.
// After implementing the method, remember to save the changes.

// Task 5: Calculate and Add Total Expenses
// Implement a method named calculateAndAddTotalExpenses within the DataAnalyzer class.
// Calculate the total expenses for each person for the entire year.
// Add a totalExpenses field to each person's data.
// After implementing the method, remember to save the changes.

// Task 6: Calculate and Add Total Income
// Implement a method named calculateAndAddTotalIncome within the DataAnalyzer class.
// Calculate the total income for each person for the entire year.
// Add a totalIncome field to each person's data.
// After implementing the method, remember to save the changes.

// Task 7: Calculate and Add Min/Max Expenses
// Implement a method named calculateAndAddMinMaxExpenses within the DataAnalyzer class.
// Calculate the minimum and maximum expenses months for each person.
// Add minExpenses and maxExpenses fields to each person's data.
// After implementing the method, remember to save the changes.
