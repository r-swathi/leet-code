function selectionSort(arr) {
    for(let i=0;i<arr.length-1; i++) {
        let min = arr[i];
        let index = i
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] < min) {
                min = arr[j];
                index = j
            }
        }
        if(arr[i]!== min) {
            //swap
            arr[index] = arr[i];
            arr[i] = min;
        }
    }
    return arr;
}
// no duplicates
console.log(selectionSort([5,2,8,6,0]))
console.log(selectionSort([5,2,8,6,5,0]))
console.log(selectionSort([5,2,8,6,5.2,5.22,0]))
console.log(selectionSort([5,2,8,6,5.2,5.22,0,"1cas", "1bas"]))

//O(n^2)