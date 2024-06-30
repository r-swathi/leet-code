class Stack {
    constructor() {
        this.stack = []
    }
    push(element) {
        this.stack.push(element)
    }
    pop() {
        return this.stack.pop()
    }
    size() {
        return this.stack.size
    }
    isEmpty() {
        return this.stack.length === 0
    }
    reverse() {
        return this.stack.reverse()
    }
    clear() {
        this.stack = []
    }
    peek() {
        return this.stack[this.stack.length - 1]
    }
    printStack() {
        let str = ""
        this.stack.forEach((ele,index) => {
            str += ele + (index < this.stack.length -1 ? "\n" : "")
        })
        return str
    }
}

const data = new Stack
data.push(1)
data.push(2)
data.push(3)
console.log(data.printStack())
console.log(data.pop())
console.log(data.peek())
