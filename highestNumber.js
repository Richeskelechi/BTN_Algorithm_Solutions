// Find the highest number between and array of numbers.  
// Given [2, 5, 8, 1, 6, 9, 5] Return 9 
// which is the highest number.

function maxValue(arr){
    return Math.max(...arr)
}

// In the solution Above I used the spread syntax
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

console.log(maxValue([2, 5, 8, 1, 6, 9, 5]));