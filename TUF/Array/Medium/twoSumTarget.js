/* 
Two Sum : Check if a pair with given sum exists in Array


Problem Statement: Given an array of integers arr[] and an integer target.
1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.
2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.

Note: You are not allowed to use the same element twice. Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.

Example 1:
Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
Result: YES (for 1st variant)
       [1, 3] (for 2nd variant)
Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for the first variant and [1, 3] for 2nd variant.

*/

function twoSumTarget(arr, sum) {
    /* 
    for(let i=0; i<arr.length-1; i++) {
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === sum) {
                // return true
                return [arr[i], arr[j]];
            }
        }
    }
    return false;
 */

    // SOLUTION 2
    let hashmap = new Map();
    for(let i=0; i< arr.length; i++) {
        hashmap.set(sum-arr[i], arr[i]);
        if(hashmap.has(arr[i])) {
            return [arr[i], hashmap.get(arr[i])]
        }
    }
    return false;

    // solution 3 - 2 pointer()sort + left and right pointer
}

console.log(twoSumTarget([2,6,5,8,11],14))