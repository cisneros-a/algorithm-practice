//Stacks are LIFO
// Last In First Out

// where stacks are used:
// Managing function invocations
// Undo / Redo
// Routing (the history object) is treated like a stack

//Array implemenetation
// the problem here is that we can't control where items are added or removed
// push and pop are more effective, because unshift has to re-index every item

// var stack = [];
// stack.push("google");
// stack.push("insta");
// stack.push("youtube");
// stack.pop();
// console.log(stack);

//Singly Linked List implementation
// You would want to use shift and unshift for a Linked List Implementation
// this is because removing and adding a tail is not O(1) time.

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }

//   push(val) {
//     var newNode = new Node(val);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       var temp = this.first;
//       this.first = newNode;
//       this.first.next = temp;
//     }
//     return ++this.size;
//   }
//   pop() {
//     if (!this.first) return null;

//     var temp = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }
// }

//===========AlgoExpert Blanaced Brackets======================
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.length;
  }

  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return temp.value;
  }
  peak() {
    return this.first.value;
  }
}

const string = "([])(){}(())()()";

function balancedBrackets(string) {
  let stack = new Stack();
  let openings = ["(", "[", "{"];
  let matches = { ")": "(", "]": "[", "}": "{" };
  for (let i = 0; i < string.length; i++) {
    if (openings.includes(string[i])) {
      stack.push(string[i]);
    } else {
      if (stack.length === 0) return false;
      if (matches[string[i]] !== stack.peak()) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(balancedBrackets(string));

//=============================================================
//=============================================================
//=============================================================
//=============================================================
//=============================================================

//Queue are FIFO
//First In First Out

// where queue are used:
// Background tasks on your pc, like order of download
// Print processing: only 1 at a time, in the order

//Linked List Implementation
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }

//   enqueue(val) {
//     var newNode = new Node(val);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     return ++this.size;
//   }

//   dequeue() {
//     if (!this.first) return null;

//     var temp = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     console.log(temp.value);
//   }
// }

// var q = new Queue();

// q.enqueue("first");
// q.enqueue("second");
// q.enqueue("third");
// q.dequeue();
// q.dequeue();
// q.dequeue();
// q.dequeue();
// console.log(q);
