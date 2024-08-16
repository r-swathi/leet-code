function reverse(str) {
    if(!str) return
    // const words = str.trim().split(" ")
    // console.log(words)
    // return words.reverse().join(" ")
    const stack = []
    for(let i=0; i<str.length; i++) {
        stack.push(str[i])
    }
    let len = stack.length -1 , val = ""

    while(len > 0) {
        if(stack[len]) {
            val += stack.pop()
        }
        if(!stack[len] && stack[len] !== stack[len-1]) {
            val += stack.pop()
        }
        len -- 
    }
    return val
}

console.log(reverse("My name is Swathi"))
console.log(reverse("a good   example"))

function reverseWords(str) {
    if(!str) return
    const words = str.trim().split(" ")
    console.log(words)
    let len = words.length, val = ""
    while(len > 0) {
        if(words[len]) {
            val += words.pop()
        }
        if(!words[len] && words[len] !== words[len-1]) {
            val += words.pop()
        }
    }
    // return words.reverse().join(" ")
   return str
}

console.log(reverseWords("My name is Swathi"))
console.log(reverseWords("a good   example"))