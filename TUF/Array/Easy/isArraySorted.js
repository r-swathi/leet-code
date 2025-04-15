/* 
    Check if an Array is Sorted

    Problem Statement: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.
*/

function isArraySorted(arr) {
    // bubble sort
    let isSorted = true;
    for(let i=0; i< arr.length - 1; i++) {
        if(arr[i] > arr[i+1]) {
            isSorted = false;
            break;
        }
    }
    return isSorted;
}

console.log(isArraySorted([1,2,3,4,5]))
console.log(isArraySorted([5,4,6,7,8]))