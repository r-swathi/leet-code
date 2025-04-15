/* 
Move all Zeros to the end of the array

In this article we will learn how to solve the most asked coding interview problem: "Move all Zeros to the end of the array"

Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.

Example 1:
Input: 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

*/

function moveZeroToEnd(arr,k) {
    let i=0;j=0, zeroCount=0;
    while(i<arr.length && j<arr.length) {
        while(arr[i] > 0) {
            i++;
            j=i+1;
            break;
        }
        if(arr[i]==0) zeroCount++;
        while(j<arr.length) {
            if(!arr[j]) {
                j++
            } else {
                arr[i] = arr[j];
                i++;
                j++;
            }

        }
    }
    arr.fill(0,i)
    return arr;
}

console.log(moveZeroToEnd([1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]))