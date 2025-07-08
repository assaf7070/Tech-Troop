let sentence = "The quick brown fox jumps over the lazy dog the fox";


const occurrences = countOccurrences(sentence.split(" "));
console.log(occurrences); // Output: { The: 1, quick: 1, brown: 1, fox: 2, jumps: 1, over: 1, the: 2, lazy: 1, dog: 1 }

function countOccurrences(words) {
    let wordCount = {};
    for (let word of words) {
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    return wordCount;
}

console.log(sum); // Output: 13

const sum2 = words.reduce((accumulator, word) => accumulator + 1, 0);
console.log(sum2); // Output: 13