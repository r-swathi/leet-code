function bubbleSort(arr) {
    let j = arr.length
    // console.log(arr)
    let didSwap = 0;
    while(j) {
        for(let i=0; i<j; i++) {
            // console.log(arr[i], arr[i+1])
            if(arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
            }
            didSwap = 1
            // console.log(arr)
        }
        if(!didSwap) {
            return arr;
        }
        j--
    }
    return arr
}

console.log(bubbleSort([22,3,5,1,66,77,24,11]))
