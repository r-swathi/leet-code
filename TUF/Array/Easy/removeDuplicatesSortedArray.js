/* 
    Remove Duplicates in-place from Sorted Array

    Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.

    If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. It does not matter what you leave beyond the first k elements.

    Note: Return k after placing the final result in the first k slots of the arra
*/

// splice, slice, shift, unshift

function removeDuplicatesFromSortedArray(arr) {
    /* wrong solution
    for(let i=0; i< arr.length; i++) {
        if(arr[i] === arr[i+1]) {
            arr.splice(i+1, 1)
        }
    }
    return arr;
    */
    /* SOLUTION 1
    let i = 0
    while(i<arr.length - 1) {
        if(arr[i] === arr[i+1]) {
            arr.splice(i+1, 1)
        } else {
            i++;
        }
    }
    return arr;
    */
    
    // SOLUTION 2
    let i=0; j=i+1; 
    /* while(j<arr.length && i<=j) {
        if(arr[i] === arr[j]) {
            j++;
        } else {
            arr[i+1] = arr[j];
            i++;
            j++;
        }
    }
     */
    for(let j=0;j<arr.length-1; j++) {
        if(arr[i] !== arr[j]) {
            arr[i+1] = arr[j];
            i++
        }
    }
    // arr.splice(i+1) OR
    arr1 = arr.slice(0,i+1)
    return arr1 ;
}

console.log(removeDuplicatesFromSortedArray([1, 1, 2, 2, 2, 3, 3]))