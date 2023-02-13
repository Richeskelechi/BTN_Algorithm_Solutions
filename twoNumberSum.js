// Given an array and a number(k), 
// find two numbers within the array that when added, it will given you k. 
// E.g ([3,2,4],6). Return 2 and 4

function twoSum(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    const pair = [];
    arr.sort((a,b) => a-b);
    while (low < high) {
        const num = arr[low] + arr[high];
        if (num < k) {
            low++;
        }
        else if (num > k) {
            high--;
        }
        else if (num == k) {
            pair.push(arr[low]);
            pair.push(arr[high]);
            return pair;
        }
    }
    return pair;
}
// Using double-pointer approach
// With this approach, the idea is to take a sorted array 
// and use i and j index to find the pair that matches to k.

// Here is a catch: the array must be sorted. 
// If it is not sorted then this approach does not work.

// Once the array is sorted, you start i at 0 and j at arr.length -1, 
// end of the array. 
// You take the value at each index and sum it up. 
// If the value is greater than k, move j by -1. 
// Because the array is sorted, all the elements that are bigger will 
// be placed to the right, where j will be located. 
// Otherwise, if the value is less than k, increment i by 1.

// We repeat this process until i is greater or equal to j, 
// indicating no pair of values match k, or if we find a pairing 
// that sums up to k.

console.log(twoSum([3,1,7,9,6, 2, 4], 6));