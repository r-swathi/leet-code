// TODO: write the function on your own

function customSplice(arr, start, deleteCount, ...itemsToAdd) {
    const removed = [];
  
    // Handle negative start
    if (start < 0) start = arr.length + start;
    if (start < 0) start = 0;
  
    // Remove items
    for (let i = 0; i < deleteCount; i++) {
      if (start + i < arr.length) {
        removed.push(arr[start + i]);
      }
    }
  
    const before = arr.slice(0, start);
    const after = arr.slice(start + deleteCount);
  
    // Rebuild original array
    arr.length = 0;
    for (let item of [...before, ...itemsToAdd, ...after]) {
      arr.push(item);
    }
  
    return removed;
}

const arr = [1, 2, 3, 4, 5];
const result = customSplice(arr, 1, 2, 9, 8);
console.log(result); // [2, 3]
console.log(arr);    // [1, 9, 8, 4, 5]


/* 
    Want a challenge? Try writing:
    A deepSlice that works with nested arrays.
    A customSplice that handles edge cases like large deleteCount, start > arr.length, etc.
*/

/* 
    Method	Modifies Original?	Returns	Time Complexity	Space Complexity
    slice	❌ No	New array	O(k)	O(k)
    splice	✅ Yes	Removed items	O(n)	O(k)
*/