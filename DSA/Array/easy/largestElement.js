/* Find the Largest element in an array
*  Problem Statement: Given an array, we have to find the largest element in the array.
*/

// Brute force
// O(n)
function largestElement(arr) {
    /* 
        handles array and string 
    */
    if(!arr.length) {
        return "Array needs to have atleast 1 element";
    }
    let max = arr[0]
    for(let i=1; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(largestElement([1,2,3,4,5]))
console.log(largestElement([1]))
console.log(largestElement([]))
console.log(largestElement(""))
console.log(largestElement("bca"))
console.log(largestElement("1234cba123"))
console.log(largestElement({}))
console.log(largestElement({a:1, b:2}))

