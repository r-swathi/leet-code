function missingNumber(nums) {
    // nums.sort((a,b) => a-b)
    // for(let i=0; i<nums.length; i++) {
    //     if(nums[i+1] !== nums[i] + 1) {
    //         return nums[i] + 1
    //     }
    // }
    console.log(Math.max(...nums), Math.min(...nums))
}

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))

