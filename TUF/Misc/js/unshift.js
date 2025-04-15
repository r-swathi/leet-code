/* 
Method	Affects Start or End?	Modifies Original?	Time Complexity	Space Complexity
push()	End	    ✅ Yes	O(1)	O(1)
pop()	End	    ✅ Yes	O(1)	O(1)
shift()	Start	✅ Yes	O(n)	O(1)
unshift Start	✅ Yes	O(n)	O(1)

const arr = [a, b, c];
Method	    Effect	                New Array
push(x)	    add at end	        [a, b, c, x]
pop()	    remove from end	    [a, b]
shift()	    remove from start	[b, c]
unshift(x)	add at start	    [x, a, b, c]


Best Way to Implement shift() and unshift() Efficiently: Use a Custom Queue with Index Mapping
Solution: Implement a Deque (Double-Ended Queue)
class CustomDeque {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }
}

Real-World Use Case: Queues, Deques, BFS, Sliding Window
This approach is used in:
Breadth-first search (BFS)
Rate limiting queues
Sliding window problems
Task schedulers
*/