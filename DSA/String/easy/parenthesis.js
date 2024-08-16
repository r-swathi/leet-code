// stack

function removeOuterParentheses(str) {
    const stack = []
    let res = ""
    for(let i=0; i< str.length; i++) {
        if(str[i] === str[i+1] && str[i] === ')') {
            stack.push(str[i])
            let j = stack.length
            while(stack.length) {
                j = stack.length -1
                console.log("res-->",res, stack)
                if(stack[j] === stack[j-1] && stack[j]=== '(') {
                    stack.pop();
                }
                res = stack.pop() + res 
            }
            console.log(res)
        }
        console.log('push-->', str[i])
        stack.push(str[i])
    }
}

console.log(removeOuterParentheses("(()())(())"))
// console.log(removeOuterParentheses("(()())(())(()(()))"))