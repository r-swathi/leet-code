/* 
Count occurrences of a number in a sorted array with duplicates

You are given a sorted array containing N integers and a number X, you have to find the occurrences of X in the given array.

Examples

Example 1:
Input: N = 7,  X = 3 , array[] = {2, 2 , 3 , 3 , 3 , 3 , 4}
Output: 4
Explanation: 3 is occurring 4 times in 
the given array so it is our answer.

Example 2:
Input: N = 8,  X = 2 , array[] = {1, 1, 2, 2, 2, 2, 2, 3}
Output: 5
Explanation: 2 is occurring 5 times in the given array so it is our answer.

*/

function countOccurances(arr, k) {
    const n = arr.length;
    let low = 0, high = n-1, mid, count = 0, index;
    while(low<= high) {
        mid = Math.floor((low + high)/ 2);
        if(arr[mid] === k) {
            count ++;
            index = mid;
            // console.log(index)
            break;
        } else if(arr[mid] < k) {
            low = mid +1;
        } else {
            high = mid -1;
        }
    }
    if(count) {
        let i = index -1, j = index+1 ;
        while(i>=0) {
            if(arr[i] === k) {
                // console.log(i)
                count ++;
                i--;
            }
            else break;
        }
        while(j < n) {
            if(arr[j] === k) {
                // console.log(j)
                count++;
                j++;
            } else break;
        }
    }
    return count;
}

console.log(countOccurances([2, 2 , 3 , 3 , 3 , 3 , 4], 3))