class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(item) {
        this.queue.push(item)
    }
    dequeue() {
        this.queue.shift()
    }
    seek() {
        return this.queue[0]
    }
    size() {
        return this.queue.length
    }
    isEmpty() {
        return this.queue.length === 0
    }
    printQueue() {
        let str = ""
        this.queue.forEach(ele => {
            str += ele + '\n'
        })
        return str;
    }
}

const data = new Queue
data.enqueue(1)
data.enqueue(2)
console.log(data.printQueue())
data.dequeue()
data.dequeue()
data.dequeue()
console.log(data.printQueue())
