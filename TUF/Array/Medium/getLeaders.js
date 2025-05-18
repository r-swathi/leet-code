/* 
Leaders in an Array
Problem Statement: Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.

Example 1:
Input:
 arr = [4, 7, 1, 0]
Output:
 7 1 0
Explanation:
Rightmost element is always a leader. 7 and 1 are greater than the elements in their right side.
*/

function getLeaders(arr) {
    let max = arr[arr.length-1];
    const finalArr = [];
    // finalArr.push(max) 
    for(let i=arr.length-1; i>=0; i--) {
        if(arr[i] >= max) {
            max = arr[i]
            finalArr.push(max)
        }
    }
    return finalArr;
}

console.log(getLeaders([4, 7, 1, 0]))
console.log(getLeaders( [10, 22, 12, 3, 0, 6]))