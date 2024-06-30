const selectionSort = (arr) => {
    const n = arr
    for(let i=0; i< arr.length-1; i++) {
        let min = Math.min(...n.slice(i))
        // console.log(min)
        let minIndex = arr.indexOf(min)
        if(minIndex === i) {
            continue
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr;
}

console.log(selectionSort([22,3,5,1,66,77,24,11]))

const selectionSortWithMinFn = (arr) => {
    for(let i=0; i< arr.length-1; i++) {
        let index = i;
        let min = arr[i]
        for(j=i+1; j<arr.length; j++) {
            if(arr[j] < min) {
                min = arr[j]
                index = j
            }
        }
        [arr[i], arr[index]] = [arr[index], arr[i]]
    }
    return arr;
}
console.log(selectionSortWithMinFn([22,3,5,1,66,77,24,11]))
