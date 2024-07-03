// function moveZeroes(nums) {
//     let zerosIndex = []
//     let count = 0 
//     // Time: 0(n) Space: O(n)
//     nums.forEach((element,index,arr) => {
//         if(!element) {
//             zerosIndex.push(index-count)
//             count++;
//         }
//     });
//     if(!count) {
//         return nums;
//     }
//     zerosIndex.forEach(index => {
//         nums.splice(index,1)
//         nums.push(0)
//     })
//     return nums
// }


function moveZeroes(nums) {
    let i = nums.length, j=0;
    while(i>0) {
        if(!nums[j]) {
            nums.push(...nums.splice(j,1))
            i--;
        } else {
            j++
        }
    }
    return nums
}

console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,1,0,3,0,0,0,1,3,4,5,0,12]))
console.log(moveZeroes([0]))
console.log(moveZeroes([0,0,0,0]))