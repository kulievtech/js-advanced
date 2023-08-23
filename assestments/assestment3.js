// Problem 1

// Create a function named transformBooks with the following specifications:

// Use only .map and .forEach methods

// 1. Input: Takes an array of arrays where each sub-array represents a collection of books in a library's section, all belonging to the same genre. Each book is represented as an object with the following properties:
// title: String, the title of the book.
// author: String, the author's name.
// genre: String, the genre of the book.
// rating: Number, the rating of the book on a scale of 1 to 5.

// 2. Transformation: The function must transform the input into a new array where each element is an object that represents a summary of the books. The transformation should follow these rules:
// Calculate the average rating for each genre.
// Include the title of the highest-rated book in each genre.

// 3. Output: Returns a new array of objects with the following properties:
// genre: String, the genre of the books.
// averageRating: Number, the average rating for the genre (rounded to two decimal places).
// topBook: String, the title of the highest-rated book in the genre.

// Example:
// Input:

const library = [
    [
        {
            title: "Harry Potter",
            author: "J.K. Rowling",
            genre: "Fantasy",
            rating: 4.5
        },
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
            rating: 4.2
        },
        {
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
            rating: 4.3
        }
    ],
    [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: "Fiction",
            rating: 4.8
        },
        {
            title: "1984",
            author: "George Orwell",
            genre: "Fiction",
            rating: 4.0
        },
        {
            title: "Brave New World",
            author: "Aldous Huxley",
            genre: "Fiction",
            rating: 4.1
        }
    ],
    [
        {
            title: "A Brief History of Time",
            author: "Stephen Hawking",
            genre: "Science",
            rating: 4.7
        },
        {
            title: "The Selfish Gene",
            author: "Richard Dawkins",
            genre: "Science",
            rating: 4.4
        }
    ]
];
// Output:

// [
//   {genre: "Fantasy", averageRating: 4.33, topBook: "Harry Potter"},
//   {genre: "Fiction", averageRating: 4.30, topBook: "To Kill a Mockingbird"},
//   {genre: "Science", averageRating: 4.55, topBook: "A Brief History of Time"}
// ]

const analyzeGenre = (books) => {
    let totalRating = 0;
    let topRating = 0;
    let topBookTitle = "";

    books.forEach((book) => {
        totalRating += book.rating;

        if (book.rating > topRating) {
            topRating = book.rating;
            topBookTitle = book.title;
        }
    });

    const averageRating = totalRating / books.length;

    return {
        genre: books[0].genre,
        averageRating: Number(averageRating.toFixed(2)),
        topBook: topBookTitle
    };
};

const transformBooks = (library) => {
    return library.map((genreBooks) => {
        const summary = analyzeGenre(genreBooks);

        return summary;
    });
};

console.log(transformBooks(library));

// Problem 2
// Create a function named filterBooks with the following specifications:
// Use .filter method

// 1. Input: The function will accept the following four arguments:
// books: An array of book objects, each having:
// title: String, the title of the book.
// author: String, the author's name.
// genre: String, the genre of the book.
// rating: Number, the rating of the book on a scale of 1 to 5.
// publishedYear: Number, the year the book was published.
// genreFilter: String, the genre to filter by.
// ratingThreshold: Number, the minimum rating to filter by (inclusive).
// yearRange: An array of two numbers, the range of publication years to filter by (inclusive).

// 2. Filtering Criteria: The function must filter books based on the following conditions provided as arguments:
// Genre: Must match the specified genreFilter.
// Rating: Must have a rating greater than or equal to ratingThreshold.
// Publication Year: Must have a publication year within yearRange.

// 3. Output: Returns a new array of objects, including the title and author of the filtered books.
// Example 1:
// Input:

const books = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        genre: "Fantasy",
        rating: 4.5,
        publishedYear: 1997
    },
    {
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        genre: "Science",
        rating: 4.7,
        publishedYear: 1988
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        rating: 3.8,
        publishedYear: 1951
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        genre: "Fiction",
        rating: 4.1,
        publishedYear: 1932
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Classics",
        rating: 4.5,
        publishedYear: 1813
    }
];

// filterBooks(books, "Fiction", 4.0, [1900, 2000]);
// Output:

// [
//   {title: "The Catcher in the Rye", author: "J.D. Salinger"},
//   {title: "Brave New World", author: "Aldous Huxley"}
// ]

const filterBooks = (books, genreFilter, ratingThreshold, yearRange) => {
    return books
        .filter((book) => {
            const { genre, rating, publishedYear } = book;
            const withinYearRange =
                publishedYear >= yearRange[0] && publishedYear <= yearRange[1];
            return (
                genre === genreFilter &&
                rating >= ratingThreshold &&
                withinYearRange
            );
        })
        .map((book) => {
            const { title, author } = book;
            return { title, author };
        });
};

const filteredResults = filterBooks(books, "Fiction", 4.0, [1900, 2000]);
console.log(filteredResults);

// Problem 3
// Create a function named createInventorySystem that encapsulates a private collection of items and provides public methods to manage this collection.

// 1. Private Data: In the outer function, define a private array to hold the items. Each item is a string representing an individual product.

// 2. Public Methods: Provide public methods to interact with this private collection:
// addItem(item): Adds an item to the collection.
// removeItem(item): Removes an item from the collection.
// getItems(): Retrieves all items from the collection.

// 3. Return Value: The function should return an object containing the public methods that allow interaction with the private data.

// Example:
// const inventorySystem = createInventorySystem();

// inventorySystem.addItem("Apple");
// inventorySystem.addItem("Banana");
// const items = inventorySystem.getItems(); // Returns: ["Apple", "Banana"]

// inventorySystem.removeItem("Apple");
// const updatedItems = inventorySystem.getItems(); // Returns: ["Banana"]

function createInventorySystem() {
    const items = [];

    return {
        addItem(item) {
            items.push(item);
        },
        removeItem(item) {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
            }
        },
        getItems() {
            return items.slice();
        }
    };
}

const inventorySystem = createInventorySystem();

inventorySystem.addItem("Apple");
inventorySystem.addItem("Banana");
const items = inventorySystem.getItems();
console.log(items);

inventorySystem.removeItem("Apple");
const updatedItems = inventorySystem.getItems();
console.log(updatedItems);

// Problem 4
// Introduction:
// Tic-Tac-Toe is a classic two-player game played on a 3x3 grid.

// Problem Statement:
// Task: Write a function named checkWinner to determine if there's a winner in a given Tic-Tac-Toe game board.

// 1. Input: An array of 9 elements representing the Tic-Tac-Toe board, where:
// The first 3 elements represent the first row.
// The next 3 elements represent the second row.
// The last 3 elements represent the third row.
// Each element is either "X", "O", or an empty string "", representing an unmarked square.

// 2. Output: Returns the winner ("X" or "O") if there is one, or null if there's no winner.

// 3. Winning Conditions: Check for a winner based on three symbols in a row horizontally, vertically, or diagonally.
// Example:
// const board = ["X", "O", "X", "X", "X", "O", "", "O", "X"];
// const winner = checkWinner(board); // Returns: "X"

// Bonus
// Task: Write a function named checkWinner that determines if there's a winner in a given Tic-Tac-Toe game board of arbitrary size.

// Input: An array representing the Tic-Tac-Toe board, and the size of the grid (e.g., 3 for a 3x3 grid).
// Each element is either "X", "O", or an empty string "", representing an unmarked square.
// The array length will be a perfect square (e.g., 9 for a 3x3 grid, 16 for a 4x4 grid).
// Output: Returns the winner ("X" or "O") if there is one, or null if there's no winner.
// Winning Conditions: Check for a winner based on size symbols in a row horizontally, vertically, or diagonally.

// Example:
// const board3x3 = ["X", "O", "X", "X", "X", "O", "", "O", "X"];
// const winner3x3 = checkWinner(board3x3, 3); // Returns: "X"

// const board4x4 = ["X", "O", "X", "X", "X", "X", "O", "", "O", "X", "O", "X", "X", "O", "O", "X"];
// const winner4x4 = checkWinner(board4x4, 4); // Returns: "X"

const checkWinner = (board) => {
    // Define all possible winning combinations
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // Rows

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // Columns

        [0, 4, 8],
        [2, 4, 6] // Diagonals
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            board[a] === board[b] &&
            board[b] === board[c] &&
            (board[a] === "X" || board[a] === "O")
        ) {
            return board[a]; // We have a winner
        }
    }

    return null; // No winner
};

// Example usage
const board = ["X", "O", "X", "X", "X", "O", "", "O", "X"];
const winner = checkWinner(board);
console.log(winner); // Outputs: "X"
