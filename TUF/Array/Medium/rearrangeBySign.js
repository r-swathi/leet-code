/* 
Rearrange Array Elements by Sign

Problem Statement:
There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.
Note: Start the array with positive elements.

Example 1:
Input:
arr[] = {1,2,-4,-5}, N = 4
Output:
1 -4 2 -5
*/
//rearrangeBySign-variation2 - brute force 
function rearrangeBySign(arr) {
    const positiveNum = [], negativeNum = [], alternateArr = [];
    for(let element of arr) {
        if(element >= 0) positiveNum.push(element)
        else negativeNum.push(element)
    }
    // for(let i=0; i<arr.length/2; i++) {
    //     alternateArr.push(positiveNum[i])
    //     alternateArr.push(negativeNum[i])
    // }
    // return alternateArr;
    for(let i=0,j=0; i < arr.length, j < positiveNum.length; i=i+2, j++) {
        // console.log(arr)
        arr[i] = positiveNum[j] //j*2
        arr[i+1] = negativeNum[j] //j*2+1
    }
    return arr
    
}

// function rearrangeBySign1(arr) {
//     const finalArr = [];let positivePos=0, negativePos =1;
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i]>=0) {
//             finalArr[positivePos] = arr[i]
//             positivePos = positivePos + 2 
//         } else {
//             finalArr[negativePos] = arr[i]
//             negativePos = negativePos + 2
//         }
//     }
//     return finalArr
    
// }

// function rearrangeBySignVariation2(arr) {
//     const finalArr = [];
//     let countPos=0, countNeg=0;
//     let positivePos=0, negativePos=1;

//     arr.forEach(element => {
//         if(element >=0) countPos++;
//         else countNeg++;
//     });
//     let count = Math.min(countNeg, countPos) 
//     countPos = count; countNeg = count;
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i]>=0 && countPos>=0) {
//             finalArr[positivePos] = arr[i]
//             positivePos = positivePos + 2;
//             countPos--;
//         } else if(countNeg>=0){
//             finalArr[negativePos] = arr[i]
//             negativePos = negativePos + 2;
//             countNeg--;
//         }
//     }
//     return finalArr
    
// }
console.log(rearrangeBySign([1,2,-4,-5]))
console.log(rearrangeBySign1([1,2,-4,-5]))