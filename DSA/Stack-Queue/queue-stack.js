/* Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty). */
/* 
Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]
*/


const MyStack = function() {
    this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    this.queue.pop()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var obj = new MyStack()
obj.push(10)
obj.push(10)
var param_2 = obj.pop()
var param_3 = obj.top()
var param_4 = obj.empty()
console.log(obj)