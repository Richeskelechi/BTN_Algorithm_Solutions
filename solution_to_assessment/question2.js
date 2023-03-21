// Your goal in this challenge is to implement a difference function, 
// which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// use the function; 

// function arrayDiff(a, b) {
  
// }

function arrayDiff(a, b) {
    // so we are using the filter function to return only the values of A that are not present in B.
    return a.filter(value => !b.includes(value));
}
console.log(arrayDiff([1,2],[1]));
console.log(arrayDiff([1,2,2,2,3],[2]));
