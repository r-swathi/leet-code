/* 
Reverse Words in a String

Problem Statement: Given a string s, reverse the words of the string.

Examples:

Example 1:
Input: s=”this is an amazing program”
Output: “program amazing an is this”

Example 2:
Input: s=”This is decent”
Output: “decent is This”
*/

function reverseString(str) {
    console.info(str.split(" ").reverse().join(" "))
    let strArr = str.split(" ");

}

console.log(reverseString("this is an amazing program"))

/* 
Inference: 
- Stack -> push and pop
*/