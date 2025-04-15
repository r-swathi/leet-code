/* 
Find the missing number in an array
Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.
*/

function findMissingNumber(arr) {
    for(let i=0; i< arr.length-1; i++) {
        if(arr[i+1] !== arr[i]+1) {
            return arr[i]+1;
        }
    }
}

console.log(findMissingNumber([1,2,4,5]))

//sum of numebers - n*(n+1)/2, OR xor 