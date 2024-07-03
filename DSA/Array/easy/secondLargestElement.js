function secondLargestElement(arr) {
    let max = arr[0]
    let max2 = arr[0]
    for(let i=0; i<arr.length; i++) {
        if(arr[i+1] > max) {
            max2 = max
            max = arr[i+1]
            continue
        }
        if(arr[i+1] < max && arr[i+1] > max2) {
            max2 = arr[i+1]
        }
    }
    return max2;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] < max && arr[i] > max2) {
            max2 = arr[i]
        }
    }
    return max2
}

console.log(secondLargestElement([8,4,6,1,7,3,9,12,10]))

// O(n) -> double loop
// O(n) -> single loop

