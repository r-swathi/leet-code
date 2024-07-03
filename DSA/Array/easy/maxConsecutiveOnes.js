function maxConsecutiveOnes(nums) {
    let count = 0; maxOnes = 0, isOne = false;
    for(let i=0; i<nums.length; i++) {
        if(nums[i]) {
            isOne = true;
        }
        if(nums[i] && nums[i] === nums[i+1]) {
            count ++
        } else {
            count > maxOnes && (maxOnes = count)
            count = 0 
        }
    }
    return maxOnes ? maxOnes + 1 : isOne ? 1 : 0
}

console.log(maxConsecutiveOnes([1,1,1,0,0,1,1]))
console.log(maxConsecutiveOnes([1,1,0,0,1,1,1]))
console.log(maxConsecutiveOnes([1,0,1,1,0,1]))
console.log(maxConsecutiveOnes([0]))
console.log(maxConsecutiveOnes([1]))
console.log(maxConsecutiveOnes([1,0,1]))