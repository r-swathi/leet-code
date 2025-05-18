/* 
Search Insert Position

Problem Statement: You are given a sorted array arr of distinct values and a target value x. You need to search for the index of the target value in the array.

If the value is present in the array, then return its index. Otherwise, determine the index where it would be inserted in the array while maintaining the sorted order.

Pre-requisite: Lower Bound & Binary Search

Example 1:
Input Format: arr[] = {1,2,4,7}, x = 6
Result: 3
Explanation: 6 is not present in the array. So, if we will insert 6 in the 3rd index(0-based indexing), the array will still be sorted. {1,2,4,6,7}.

Example 2:
Input Format: arr[] = {1,2,4,7}, x = 2
Result: 1
Explanation: 2 is present in the array and so we will return its index i.e. 1.


Example of lower bound
*/

function searchInserPosition(arr, k) {
    let n = arr.length;
    if(!n) {
        return -1;
    }
    let low = 0, high = n-1, lb = n;
    while(low <= high) {
        // let mid = Math.floor((low + high)/ 2);
        let mid = BigInt((low + high)/ 2);
        // console.log(low,mid,high)
        if(arr[mid] >= k) {
            lb = mid;
            high = mid -1
        } else {
            low = mid + 1;
        }
    }
    return lb;
}

console.log(searchInserPosition([1,2,4,7], 6))

/* 
TODO: other ways to convert decimal to inerger 
*/