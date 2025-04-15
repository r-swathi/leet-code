/* 
    Find Second Smallest and Second Largest Element in an array without sorting 
    Problem Statement: Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.
    Edge case: 
*/

function  secondSmallestAndLargestElement(arr) {
    /* 
    let min = arr[0], max = arr[0];
    for(let i=1 ; i<arr.length; i++) {
        if(arr[i] < min ) {
            min = arr[i]
        }
        if(arr[i] > max ) {
            max = arr[i]
        }
    }
    return {min, max}
    */

    // new duplicates and sort
    let min = arr[0], secondmin = arr[1];
    for(let i=1; i< arr.length; i++) {
        if(arr[i] < min) {
            secondmin = min;
            min = arr[i]
        } else if(secondmin > min && secondmin > arr[i]){
            secondmin = arr[i]
        }
    }
    return secondmin;
}

console.log(secondSmallestAndLargestElement([1,10,4,7,7,5,3]))