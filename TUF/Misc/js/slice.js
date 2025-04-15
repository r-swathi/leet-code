// TODO: write the function on your own

function customSlice(arr, start = 0, end = arr.length) {
    const result = [];
    
    // Handle negative indices
    if (start < 0) start = arr.length + start;
    if (end < 0) end = arr.length + end;
  
    for (let i = start; i < end && i < arr.length; i++) {
      result.push(arr[i]);
    }
  
    return result;
}

console.log(customSlice([1, 2, 3, 4, 5], 1, 4)); // [2, 3, 4]
