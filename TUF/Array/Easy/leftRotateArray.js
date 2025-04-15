/* 
Left Rotate the Array by One
Problem Statement: Given an array of N integers, left rotate the array by one place.

Example 1:
Input: N = 5, array[] = {1,2,3,4,5}
Output: 2,3,4,5,1
Explanation: 
Since all the elements in array will be shifted 
toward left by one so ‘2’ will now become the 
first index and and ‘1’ which was present at 
first index will be shifted at last.

*/

function leftRotateArray(arr) {
    //  Solution 1:
    /* 
    let firsElement = arr[0];
    for(let i=1; i< arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr[arr.length-1] = firsElement;
    return arr;
    */

    // SOLUTION 2
    let removedElement = arr.shift();
    arr[arr.length] = removedElement;
    return arr
}
console.log(leftRotateArray([1,2,3,4,5]))

/* 
Rotate array by K elements

Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.

Examples:

Example 1:
Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
Output: 6 7 1 2 3 4 5
Explanation: array is rotated to right by 2 position .
*/

function leftRotateByK(arr, k) {
    // SOLUTION 1 
    /* for(let i=0; i<k; i++) {
        let removedElement = arr.shift()
        // console.log(removedElement, arr)
        arr.push(removedElement);
    }
    return arr */

    // SOLUTION 2
    const tempArr = [];
    for(let i=0; i<k ; i++) {

    }
}

function rightRotateByK(arr, k) {
    // SOLUTION 2
    const tempArr = arr.slice(arr.length - k);
    const remArr = arr.slice(0,arr.length - k)
    arr = [...tempArr, ...remArr];
    return arr;
}

console.log(rightRotateByK([1,2,3,4,5,6,7],3))
