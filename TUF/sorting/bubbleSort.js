function bubbleSort(arr) {
    for(let i=arr.length-1; i>0; i--) {
        let didSwap = 0
        for(let j=0; j<i; j++) {
            if(arr[j] > arr[j+1]) {
                //option 1: Swap
                // let max = arr[j+1];
                // arr[j+1] = arr[j];
                // arr[j] = max;

                // option 2:swap
                arr[j+1], arr[j] = arr[j], arr[j+1]

                didSwap = 1
                //invalid option
                // arr[j+1], arr[j] = (arr[j], arr[j+1]) -> return 0 in all elements why?
            }
        }
        if(!didSwap) {break;}
    }
    return arr;
}

// check if the array is sorted - O(n)
console.log(bubbleSort([5,2,8,6,0]))
console.log(bubbleSort([5,2,8,6,5,0]))
console.log(bubbleSort([5,2,8,6,5.2,5.22,0]))
console.log(bubbleSort([5,2,8,6,5.2,5.22,0,"1cas", "1bas"]))

// O(n^2)
// accessing element not present will throw runtime error 