// TODO: write the function on your own

/* 
    Problem Statement: Implement Your Own Spread Simulation
    Write a function called spread that simulates the behavior of the spread operator for any function that accepts a variable number of arguments.

    Your function should:

    Take a function fn as input.

    Return a new function.

    This returned function should accept an array and internally spread that array as arguments to the original function.

    🔸Constraints:
    Do not use the ES6 spread operator (...) anywhere in your code.

    Use either .apply() or .call() to mimic spreading.

    Example: 
    const min = spread(Math.min);
    console.log(min([3, 5, 1, 9])); // Output: 1

    const joinStrings = spread(function (a, b, c) {
    return a + b + c;
    });
    console.log(joinStrings(['I ', 'love ', 'JS'])); // Output: "I love JS"

*/

function spread(fn) {
    return function(arr) {
        return fn.apply(null, arr);
    };
}

// Example 1: Math.min
const min = spread(Math.min);
console.log(min([10, 4, 2, 8])); // Output: 2

// Example 2: Math.max
const max = spread(Math.max);
console.log(max([10, 4, 2, 8])); // Output: 10

// Example 3: Custom function
function multiply(a, b, c) {
  return a * b * c;
}

const spreadMultiply = spread(multiply);
console.log(spreadMultiply([2, 3, 4])); // Output: 24
