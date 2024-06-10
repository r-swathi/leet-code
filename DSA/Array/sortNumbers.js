/* 
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
*/
const sortColors = function(nums) {
    const numsMap = new Map
    nums.forEach(element => {
        if(!numsMap.has(element)) {
            numsMap.set(element,1)
            return;
        }
        numsMap.set(element, numsMap.get(element)+1)
    });
    const sortedArray = Array(nums.length)
    let j = 0
    for(let i=0; i<numsMap.size; i++) {
        nums.fill(i,j,j + numsMap.get(i))
        j = j + numsMap.get(i)
    }
    return nums;
};

const sortArray = nums => {
    return nums.sort();
}

console.log(sortColors([2,0,2,2,2,1,1,0]))
console.log(sortArray([2,0,2,2,2,1,1,0]))