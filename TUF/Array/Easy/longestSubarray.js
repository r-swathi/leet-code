/* 
Longest Subarray with given Sum K(Positives)

Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

Example 1:
Input Format: N = 3, k = 5, array[] = {2,3,5}
Result: 2
Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.
*/

function longestSubarray(arr, sum) {
    const subarray = [];
    let k;
    console.log('array->', arr)
    for(let i=0; i<arr.length; i++) {
        // console.log('--subarray ->', subarray)
        console.log('i, (i) ->', i, `(${arr[i]})`)
        if(arr[i]=== sum) {
            subarray.push(arr[i]);
            console.log('i-subarray ->', subarray)
        }
        for(let j=i+1; j<arr.length; j++) {
            console.log('j, (i,j) ->', j, `(${arr[i]},${arr[j]})`)
            let ijSum =0; 
            let m = j, mVal = []
            while(m>=i) {
                // console.log('ijSum,m,arr[m] ->', ijSum, m ,arr[m])
                ijSum = ijSum + arr[m];
                mVal.push(arr[m])
                m--;
            }
            console.log('ijSum ->', ijSum)
            if(ijSum === sum) {
                subarray.push(mVal);
                console.log('j-subarray ->', mVal)
            }
            for(let k=j+1; k<arr.length; k++) {
                console.log('k, (i,j,k) ->', k, `(${arr[i]},${arr[j]},${arr[k]})`)
                const kVal = [...mVal]
                if(ijSum + arr[k] === sum) {
                    // console.log('k-mVal, arr[k] ->', mVal, arr[k])
                    kVal.push(arr[k])
                    subarray.push(kVal)
                    console.log('k-subarray ->', subarray)
                }
            }
        }
    }
    console.log(subarray)
}

// console.log(longestSubarray([2,3,5], 5))
console.log(longestSubarray([2,3,5,1,9], 10))