/* 
    Linear Search in C

Problem Statement: Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.

Examples:

Example 1:
Input: arr[]= 1 2 3 4 5, num = 3
Output: 2
Explanation: 3 is present in the 2nd index
*/

function linerSearch(arr,k) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === k) {
            return i;
        }
    }
    return -1;
}

console.log(linerSearch([1, 2, 3, 4, 5],3)) 