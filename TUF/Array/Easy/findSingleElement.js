/* 
Find the number that appears once, and the other numbers twice
Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.
*/

//  set or a map problem 

function findSingleElement(arr) {
    // map method - hashing concept using map
       /*  const hashmap = new Map();
        for(let i=0; i<arr.length; i++) {
            const num = arr[i];
            count = (hashmap.get(num) || 0 )
            hashmap.set(num, count + 1)
        }

        for(const [index,val] of hashmap) {
            if(val===1) {
                return index;
            }
        }
        return -1
 */

    // xor method
    let xorr = 0; 
    for(let i=0 ;i<arr.length; i++) {
        xorr = xorr ^ arr[i];
        // console.log(xorr)
    }
    return xorr;
    

}

console.log(findSingleElement([2,3,2,1,1,4,3]))