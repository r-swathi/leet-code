function isSorted(arr) {
    let ascOrder = true;
    let desOrder = true;
    for(let i=0; i< arr.length - 1; i++) {
        if(arr[i] <= arr[i+1] && ascOrder) {
            desOrder = false
            continue;
        }
        if(arr[i] >= arr[i+1] && desOrder) {
            ascOrder = false
            continue;
        }
        return false
    }
    return true
}

console.log(isSorted([1,2,4,5,6,7,9]))
console.log(isSorted([3,1,6,7,0]))
console.log(isSorted([9,5,3,2,1,0]))
console.log(isSorted([3,4,5,1,2]))
console.log(isSorted([1,1,2,4,5,5]))