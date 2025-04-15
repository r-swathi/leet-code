function qs(arr, low, high) {
    if(low<high) {
        let partitionindex = getPartitionindex(arr, low, high);
        console.log('partitionindex',partitionindex);
        // return partitionindex;
        qs(arr, low, partitionindex-1)
        qs(arr, partitionindex+1, high) 
    }
    return arr
}

function getPartitionindex(arr, low, high) {
    let i=low, j=high, pivot=arr[low];
    console.log(i,j,pivot)
    while(i<j) {
        while(arr[i]<= pivot && i <= high ) {
            i++
        }
        while(arr[j] > pivot && j>= low) {
            j--;
        }
        console.log(i,j)
        if(i<j) {
            // swap
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
        console.log('i,j,arr',i,j,arr)
    }
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
}

function quickSort(arr) {
    qs(arr, 0, arr.length-1)
    return arr
}


console.log(quickSort([5,2,8,6,0]))