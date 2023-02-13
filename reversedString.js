// Given a string find the reversed form of that string. 
// E.g given “book” your answer should be “koob”

let string = "book"
let reversedString = string.split('').reverse().join('');

console.log(reversedString);