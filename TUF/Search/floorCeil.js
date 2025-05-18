/* 
Floor and Ceil in Sorted Array

Problem Statement: You're given an sorted array arr of n integers and an integer x. Find the floor and ceiling of x in arr[0..n-1].
The floor of x is the largest element in the array which is smaller than or equal to x.
The ceiling of x is the smallest element in the array greater than or equal to x.

Pre-requisite: Lower Bound & Binary Search

Example 1:
Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 5
Result: 4 7
Explanation: The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7.

Example 2:
Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 8
Result: 8 8
Explanation: The floor of 8 in the array is 8, and the ceiling of 8 in the array is also 8.
*/

function floor(arr, k) {
    let n = arr.length; 
    if(!n) return -1;

    let low = 0, high = n-1, floor = n;
    while(low <= high) {
        let mid = Math.floor((low + high)/ 2);
        if(arr[mid] === k) return k
        if( arr[mid] < k) {
            floor = arr[mid];
            low = mid +1
        } else {
            high = mid -1; 
        }
    }
    return floor;
}

function ceil(arr, k) {
    let n = arr.length; 
    if(!n) return -1;

    let low = 0, high = n-1, ceil = n;
    while(low <= high) {
        let mid = Math.floor((low + high)/ 2);
        if(arr[mid] === k) return k
        if( arr[mid] > k) {
            ceil = arr[mid];
            high = mid -1; 
        } else {
            low = mid +1
        }
    }
    return ceil;
}

console.log(floor([3, 4, 4, 7, 8, 10], 5), ceil([3, 4, 4, 7, 8, 10], 5))