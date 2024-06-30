function insertionSort(arr) {
    for(let i=0; i< arr.length-1; i++) {
        let j=i+1
        while(j>0) {
            if(arr[j] < arr[j-1]) {
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
            }
            // console.log(arr)
            j--
        }
    }
    return arr
}

console.log(insertionSort([22,3,5,1,66,77,24,11]))