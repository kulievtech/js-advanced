//Problem 1: Magic Cipher
//Write a function magicCipher(sentence, cipher) that takes in a string sentence and an object cipher. Return a string where every character is replaced with its corresponding value in the cipher. If the character doesn't exist in the cipher, use the character itself.

//Example

// magicCipher("add me on facebook", { a: "c", d: "q" }) // "cqq me on fccebook"
// magicCipher("where are you?", { v: "l", "?": "!" }) // "where are you!"
// magicCipher("twmce", { m: "n", t: "d", w: "a" }) //  "dance"

const str1 = "add me on facebook";
const obj1 = { a: "c", d: "q" };

function magicCipher(sentence, cipher) {
    let result = "";

    for (let i = 0; i < sentence.length; i++) {
        const eachLetter = sentence[i];

        //     for (let j = 0; j < eachWord.length; j++) {
        //         const eachLetter = eachWord[j];
        //         result = eachWord.replaceAll(eachLetter, Object.values(cipher));
        //     }
        // }
        // return result;

        if (cipher[eachLetter]) {
            result += cipher[eachLetter];
            // console.log(result);
        } else {
            result += eachLetter;
        }
    }
    return result;
}

console.log(magicCipher("add me on facebook", { a: "c", d: "q" })); // "cqq me on fccebook"
console.log(magicCipher("where are you?", { v: "l", "?": "!" })); // "where are you!"
console.log(magicCipher("twmce", { m: "n", t: "d", w: "a" })); //  "dance"

//Problem 2: Hipsterfy

//Write a function hipsterfy(sentence) that takes a string containing several words as input. Remove the last vowel from each word. 'y' is not a vowel.

//Example

//hipsterfy("proper") => "propr"
//hipsterfy("proper tonic panther") => "propr tonc panthr"
//hipsterfy("towel flicker banana") => "towl flickr banan"
//hipsterfy("runner anaconda") => "runnr anacond"
//hipsterfy("turtle cheeseburger fries") => "turtl cheeseburgr fris"

//Problem 3: Count Adjacent Sums

//Write the function countAdjacentSums(arr, n) which takes an array and a number n. It should count the number of times that two adjacent numbers in an array add up to n.

//Example

// countAdjacentSums([1, 5, 1], 6) => 2
// countAdjacentSums([7, 2, 4, 6], 7) => 0
// countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) => 3

function countAdjacentSums(array, number) {
    let count = 0;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] + array[i + 1] === number) {
            count++;
        }
    }

    return count;
}

console.log(countAdjacentSums([2, 5], 7));
console.log(countAdjacentSums([7, 2, 4, 6], 7));
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13));
console.log(countAdjacentSums([1], 6));

//Problem 4: Longest Letter Streak
//Write a function longestLetterStreak(str, searchLetters) that takes in two arguments:

//str: A string of uppercase characters.
//searchLetters: An array of uppercase single-character strings (e.g., ["A", "F", "K"])
//The function should return the length of the longest streak of letters (consecutive letters) in the str that are in the searchLetters.

//Example

// longestLetterStreak("ACCA", ["C"]) => 2
// longestLetterStreak("YACCADCA", ["C", "A"]) => 4
// longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]) => 3
// longestLetterStreak("YYYYY", ["Z", "K", "Y"]) => 5

//Problem 5: In Pig Latin
//Write a function inPigLatin(sentence) that translates a sentence into its pig Latin equivalent. The rules for the translation are as follows:

//For words that begin with consonants, all letters before the initial vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
//"pig" → "igpay"
//"banana" → "ananabay"
//"trash" → "ashtray

//For words that begin with vowels, just add "yay" to the end.
//"eat" → "eatyay"
//"omelet" → "omeletyay"
//"are" → "areyay"
//Words that were originally caplitalized must remained caplitalized
//Assume no punctuation
//'y' is not a vowel

//Examples

// inPigLatin("Shmanthony is the best teacher") => "Anthonyshmay isyay ethay estbay eachertay"
// inPigLatin("let us Dance") => "etlay usyay Anceday"
// inPigLatin("this is the time of my life") => "isthay isyay ethay imetay ofyay myay ifelay"
