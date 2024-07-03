function removeDuplicates(sortedArr) {
    // if(!isSorted(sortedArr)) {
    //     return 'not a sorted arr'
    // }
    // brute force
 
    // let k = 0, m=0, j=1;
    // for(let i=k; i<sortedArr.length; i++) {
    //     console.log("i,j-->"+sortedArr[i],sortedArr[j])
    //     for(j=i+1; sortedArr[i] == sortedArr[j];) {
    //         console.log(i,j)
            
    //         // delete sortedArr[j]
    //         sortedArr.splice(j, 1)
    //         console.log(sortedArr)
    //         // console.log(sortedArr)
    //         k++
    //         j=k+1
    //     }
    //     console.log(k)
    // }
    // return sortedArr;


    let i = 0
    let j = i + 1
    let removedDup = false
    console.log(sortedArr)
    while(i < sortedArr.length) {
        removedDup = false
        while(sortedArr[i] == sortedArr[j]) {
            sortedArr.splice(j, 1)
            // i++;
            // j = i + 1
            removedDup = true
            // console.log(sortedArr)
        }
        i++; j++
        // if(!removedDup) {
        //     i++;j++
        // }
    }
    return sortedArr
}
// console.log(removeDuplicates([1,1,2,3,4,4,5,6,7,9]))
// console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
// [0,0,1,1,1,2,2,3,3,4]
// [0,1,1,1,2,2,3,3,4]