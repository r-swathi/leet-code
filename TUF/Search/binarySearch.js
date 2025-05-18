function binarySearch(arr, search) {
    if(!arr.length) {
        return -1
    };
    let low=0, high = arr.length -1;
    while(low <= high) {
        let mid = Math.floor((low + high)/2);
        // console.log(low,mid,high)
        if(arr[mid] === search) return mid;
        else if(search > arr[mid]) low = mid +1;
        else high = mid -1;
    }
    return -1;
}

const searhIndex = binarySearch([3, 4, 6, 7, 9, 12, 16, 17], 6);
console.log(searhIndex)
