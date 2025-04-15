function divideAndMege(arr,low, high) {
    console.log('A-->',low,high)
    if(low===high) return;
    let mid = Math.floor((low+high)/2)
    console.log(low,mid,high)
    divideAndMege(arr,low ,mid)
    divideAndMege(arr, mid+1 ,high)
    merge(arr,low,mid,high )
    return arr;
}
function merge(arr, low, mid, high) {
    let left = low;
    let right = mid +1;
    const temp = [];
    while(left<=mid && right<=high) {
        if(arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        }
        else {
            temp.push(arr[right]);
            right++;
        }
    }
    while(left <= mid) {
        temp.push(arr[left])
        left++
    }
    while(right <= high) {
        temp.push(arr[right])
        right++
    }
    for(let i=low; i<=high; i++) {
        console.log('merge->',i,low,high,temp,arr)
        arr[i] = temp[i-low]
    }
    console.log(temp)
}
function mergeSort(arr) {
    divideAndMege(arr,0,arr.length-1)
}

console.log(mergeSort([5,2,8,6,0]))
console.log(mergeSort([5,2,8,6,5,0]))