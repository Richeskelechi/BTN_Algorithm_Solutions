// Write an Algorithm that takes a number and returns the square of all digits 
// in the number. E.g given 9119. 
// The algorithm should return 811181

function getSquare(num){
    return +(num
            .toString()
            .split('')
            .map(num => num*num)
            .join(''));
}
// explanation of the algorithm

// since it parameter is a number I am using .toString() 
// method to convert the number to a string

// Now that the num is now a string i am using the .split() 
//method to convert the string to an array

// I am using the .map() method to to loop through each element of the array
// then convert it to the square of each of them.

// I am using the .join() method to convert the array back to a string.

//Remember the value we were given was a number 
// so I had to convert the string back to a number by adding the plus(+)
// You can also use the Number keyword
console.log(getSquare(2424));