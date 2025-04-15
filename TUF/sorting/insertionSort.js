function insertionSort(arr) {
    for(let i=0; i< arr.length-1; i++) {
        let j=i;
        while(j>0 && arr[j-1] > arr[j]) {
            let max = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = max;
            // arr[j-1],arr[j] = arr[j],arr[j-1];
            j--;
        }
    }
    return arr
}

console.log(insertionSort([5,2,8,6,0]))
console.log(insertionSort([5,2,8,6,5,0]))