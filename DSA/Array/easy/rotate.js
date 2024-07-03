function rotateLeft(arr) {
    // if(arr.length <= 1) {
    //     return arr
    // }
    let firstElem = arr.shift()
    arr[arr.length] = firstElem
    return arr
}

console.log(rotateLeft([1,2,3,4]))
console.log(rotateLeft([1]))

function rotateRight(arr, k) {
    // if(arr.length <= 1) {
    //     return arr
    // }
    let ele = []
    if(k>arr.length) {
        k = k % arr.length
    }
    while(k>0) {
        ele.push(arr.pop())
        k--
    }
    // console.log(arr, ele)
    arr.unshift(...ele.reverse())
    return arr
}

console.log(rotateRight([1,2,3,4,5],2))
console.log(rotateRight([1],3))