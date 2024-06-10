// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Time complexity: O(n^2)
const maxSubArray = function(nums) {
    let maxSum = nums[0];
    let position = {
        i:0,
        j:0
    }
    for(let i=0; i<nums.length; i++) {
        let sum = nums[i]
        for(let j=i+1; j<=nums.length;j++) {
            if(sum>maxSum) {
                maxSum = sum;
                position.i = i
                position.j = j
            }
            sum = sum + nums[j]
        }
    }
    // return nums.slice(position.i, position.j +1)
    return maxSum
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([5,4,-1,7,8]))
