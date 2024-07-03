function duplicateNumber(nums) {
    let xor = 0
    for(let i=0; i<nums.length; i++) {
        xor = xor ^ nums[i]
    }
    return xor
}
console.log(duplicateNumber([1,1,3,5,2,2,3]))