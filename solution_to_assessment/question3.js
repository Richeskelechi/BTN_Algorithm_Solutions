// Implement the function unique_in_order which takes as argument a sequence and returns a 
// list of items without any elements with the same value next to each other and 
// preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// use the function

// var uniqueInOrder = function(iterable){
//   //your code here - remember iterable can be a string or an array
// }
var uniqueInOrder = function(iterable){
    var result = [];
  
    // If the input is empty, return an empty array
    if (iterable.length === 0) {
      return result;
    }
  
    // Add the first element to the result
    result.push(iterable[0]);
  
    // Iterate through the input, checking each element against the last element in the result array
    for (var i = 1; i < iterable.length; i++) {
      if (iterable[i] !== result[result.length -1]) {
        // If the current element is different from the previous one, add it to the result
        result.push(iterable[i]);
      }
    }
  
    return result;
  };

  console.log(uniqueInOrder('AAAABBBCCDAABBB'));
  
