// Problem 1
// Create a function called organizeBooks that takes an array of book objects as an argument. Each book object contains title, author, and genre. The function should return an object where each key is a genre and each value is an array of titles belonging to that genre.

// Example Input:

// const books = [
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic' },
//   { title: '1984', author: 'George Orwell', genre: 'Science Fiction' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic' }
// ];
// Example Output:

// {
//   'Classic': ['To Kill a Mockingbird', 'The Great Gatsby'],
//   'Science Fiction': ['1984']
// }

const organizeBooks = (books) => {
    return books.reduce((groupedGenre, book) => {
        const { title, genre } = book;
        if (groupedGenre[genre] == null) {
            groupedGenre[genre] = [];
        }
        groupedGenre[genre].push(title);
        return groupedGenre;
    }, {});
};

const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
    { title: "1984", author: "George Orwell", genre: "ScienceFiction" },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic"
    }
];

console.log(organizeBooks(books));

// Problem 2
// Create a function called vowelFrequency that takes an array of strings and returns an object that represents the frequency of each vowel (a, e, i, o, u) in all the words combined

// Example Input:

// const words = ['apple', 'orange', 'grape'];
// Example Output:

// { 'a': 3, 'e': 3, 'i': 0, 'o': 1, 'u': 0 }

const vowelFrequency = (words) => {
    const vowels = ["a", "e", "i", "o", "u"];

    return words.reduce((frequency, word) => {
        for (const char of word) {
            if (vowels.includes(char)) {
                frequency[char] = (frequency[char] || 0) + 1;
            }
        }
        return frequency;
    }, {});
};

const words = ["apple", "orange", "grape"];
const result = vowelFrequency(words);
console.log(result);

// Problem 3
// Create a function called numericalAnalysis that takes an array of numbers as an argument. This function should return an object containing the sum of all numbers, the product of all numbers, and the count of negative numbers in the array.

// Example Input:

// const numbers = [1, -1, 2, -2, 3, -3];
// Example Output:

// { sum: 0, product: -36, negativeCount: 3 }

const numericalAnalysis = (numbers) => {
    const sum = numbers.reduce((acc, number) => acc + number, 0);

    const product = numbers.reduce((acc, number) => acc * number, 1);

    const negativeCount = numbers.reduce((acc, number) => {
        if (number < 0) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);
    return { sum, product, negativeCount };
};

const numbers = [1, -1, 2, -2, 3, -3];

console.log(numericalAnalysis(numbers));
