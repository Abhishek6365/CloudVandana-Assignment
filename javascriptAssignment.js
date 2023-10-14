function reverseWords(sentence) {
    return sentence.split(' ').map(word => {
        return word.split('').reverse().join('');
    }).join(' ');
}

let inputSentence = "This is a sunny day";
let reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);



function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

let inputArray = [5, 3, 9, 1, 8, 2];
let sortedArray = sortDescending(inputArray);
console.log(sortedArray);

