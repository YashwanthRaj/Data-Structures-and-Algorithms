// Stack Implementation
console.log("Stack using Linked List");

class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor () {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        let node = new Node(value);

        if (this.length === 0) {
            this.top = node;
            this.bottom = node;
        } else {
            this.top.next = node;
            this.top = node;
        }
        
        this.length ++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        } 
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
}


const myStack = new Stack();
myStack.push("udemy");
myStack.push("Coursera");
myStack.push("Youtube");
console.log(myStack);

myStack.pop();
console.log(myStack);

// Stack Implementation using Arrays
console.log("Stack Implementation using Arrays");

class Stack1 {
    constructor(){
      this.array = [];
    }
    peek() {
      return this.array[this.array.length-1];
    }
    push(value){
      this.array.push(value);
      return this;
    }
    pop(){
      this.array.pop();
      return this;
    }
  }
  
  const myStack1 = new Stack1();
  myStack1.peek();
  myStack1.push('google');
  myStack1.push('ztm');
  myStack1.push('discord');
  console.log(myStack1);

  myStack1.peek();

  myStack1.pop();
  console.log(myStack1);


// Queue Implementation
console.log("Queue Implementation")

  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }

    
    peek() {
      return this.first;
    }


    enqueue(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.length++;
      return this;
    }


    dequeue() {
      if (!this.first) {
        return null;
      }
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.length--;
      return this;
    }
    //isEmpty;
  }

  const myQueue = new Queue();
  myQueue.enqueue("Joy");
  myQueue.enqueue("Matt");
  myQueue.enqueue("Pavel");
  myQueue.enqueue("Samir");
  myQueue.dequeue();
  myQueue.peek();
  console.log(myQueue);
  //Joy
  //Matt
  //Pavel
  //Samir