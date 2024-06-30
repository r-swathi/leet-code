/* 
The frequency of an element is the number of times it occurs in an array.

You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.

Return the maximum possible frequency of an element after performing at most k operations.


Example 1:

Input: nums = [1,2,4], k = 5
Output: 3
Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
4 has a frequency of 3.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxFrequency = function(nums, k) {
    // subset
    for(let i=0; i< nums.length - 1; i++) {
        for(j=i+1; j< nums.length; j++) {
            const subset = [nums[i], nums[j]]
            const maxNum = Math.max(subset)
            console.log(subset, maxNum)
        }
    }
};

