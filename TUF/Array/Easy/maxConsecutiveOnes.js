/* 
Count Maximum Consecutive One's in the array

Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.
Example 1:
Input: prices = {1, 1, 0, 1, 1, 1}
Output: 3
Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

*/

function maxConsecutiveOnes(arr) {
    let i=0, j=0, totalOnes = 0, maxOnes =0;
    while(i<arr.length && j<arr.length) {
        totalOnes = 0;
        while(!arr[i]) {
            i++;
            j=i;
        }
        while(arr[j]) {
            j++;
            totalOnes ++;
        } 
        i = j;
        if(totalOnes > maxOnes) maxOnes = totalOnes;
    }
    return maxOnes;
}

console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
console.log(maxConsecutiveOnes([0,0,1,0,1, 1, 0, 1, 1, 1,0]))