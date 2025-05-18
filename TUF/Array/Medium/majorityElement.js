/* 
Find the Majority Element that occurs more than N/2 times

Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.
*/

function majorityElement(arr) {
    // O(n^2) -> 2 for loop
    // SOLUTION2: MAP
/* 
    const hashmap = new Map;
    // console.log(Math.floor(arr.length/2))
    // return arr.some(element => {
    for(let element of arr) {
        // console.log(element, hashmap.get(element))
        hashmap.set(element, (hashmap.get(element) || 0) +1)
        if(hashmap.get(element) >= Math.floor(arr.length/2)) return element;
    };
    // console.log(hashmap.get(4) >= Math.floor(arr.length/2))
    return -1;
     */

    // SOLUtion3: moore's algo
    let currentElem = -1;
    let count = 0;
    for(element of arr) {
        if(!count || currentElem === element) {
            count++;
            currentElem = element;
        } else{
            count--;
        }
    }
    return currentElem;
}

console.log(majorityElement([4,4,2,4,3,4,4,3,2,4]))