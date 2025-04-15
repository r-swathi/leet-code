/* 
Union of Two Sorted Arrays

Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.

The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order.
*/

function unionOfArray(arr1, arr2) {
    let i=0;j=0;
    const arr = [];
    while(i<arr1.length && j<arr2.length) {
        if(arr1[i] <= arr2[j]) {
            arr.push(arr1[i]);
            i++;
            // if(arr1[i] === arr2[j]) j++;
        } else if(arr1[i] > arr2[j]){
            if(i && arr2[j] > arr1[i-1]) {
                arr.push(arr2[j]);
            } 
            j++;
        }
    } 
    console.log(i,j);return arr
    // while(i< arr1.length) {
    //     arr.push(arr1[i])
            // i++
    // }
    // while(j< arr2.length) {
    //     arr.push(arr2[j])
    //      j++;
    // }
    // return arr;
}

console.log(unionOfArray([1,2,3,4,5], [2,3,4,4,5,6]))

// can as use map and set - O(logn)