/*  
    Find the Largest element in an array

*/

function largestElemet(arr) {
    // brute force
    /* 
    let max = arr[0];
    for(let i=1; i<arr.length-1; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max; 
    */

    /* 
    let max = arr[0];
    arr.forEach(element => {
        if(element > max) {
            max = element
        }
    });
    return max; 
    */

    // return Math.max(...arr)

    return arr.reduce((max, element) => element > max ? element : max , 0)
    
}

console.log(largestElemet([2,5,1,3,0]))