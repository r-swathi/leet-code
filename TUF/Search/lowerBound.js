/* 
Implement Lower Bound
Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.

What is Lower Bound?
The lower bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than or equal to a given key i.e. x.

The lower bound is the smallest index, ind, where arr[ind] >= x. But if any such index is not found, the lower bound algorithm returns n i.e. size of the given array.

let arr = [3, 5, 8, 15, 19];
 x = 9;  4; 8
lb = 15; 5; 8

arr[ind] >= x
*/

function lowerbound(arr, x) {
    if(!arr.length) {
        return -1
    };
    // binary search
    let low = 0, high = arr.length -1, lb = arr.length;
    while(low <= high) {
        let mid = (low + high) / 2;
        if(arr[mid] >= x) {
            lb = arr[mid];
            high = mid -1; 
        }
        else low = mid + 1
    }
    return lb;
}

console.log(lowerbound([3, 5, 8, 15, 19], 9))