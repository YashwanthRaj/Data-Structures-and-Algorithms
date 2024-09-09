// Building Singly Linked List From Scratch

class Node {
    constructor (value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Linkedlist {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
      };
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value) {
      // const sampleObject = { value: value, next: null };
      const sampleObject = new Node(value);
      this.tail.next = sampleObject;
      this.tail = sampleObject;
      this.length++;
      return this; // this which means linkedList class itself. This will return the linked List
    }
  
    prepend(value) {
      // const sampleObject = { value: value, next: null };
      const sampleObject = new Node(value);
      sampleObject.next = this.head;
      this.head = sampleObject;
      this.length++;
      return this;
    }

    printArray() {
        let linkedListArray = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            linkedListArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return linkedListArray;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while ( counter !== index) {
            currentNode = currentNode.next;
            counter ++;
        }
        return currentNode;

    }

    insert(index, value) {

        if (index === 0) {
            this.prepend(value);
            this.length++;
            return this.printArray();
          } else if (index >= this.length) {
            this.append(value);
            this.length++;
            return this.printArray();
          }

        let node = new Node(value);
        let currentNode = this.traverseToIndex(index - 1);
        let currentNodeNext = currentNode.next;

        currentNode.next = node;
        node.next = currentNodeNext;
        this.length++;
        return this.printArray();
    }

    remove(index) {
        // This loop was designed to remove the last element from the linked list when the given index is greater than length of the linked list
        // if (index >= this.length) {
        //     let currentNode = this.traverseToIndex(this.length - 2);
        //     currentNode.next = null;
        //     this.tail = currentNode;
        //     this.length--;
        //     return this;
        // }

        let currentNode = this.traverseToIndex(index - 1);
        let currentNodeNext = this.traverseToIndex(index + 1);
        let deletedIndexNode = currentNode.next;

        currentNode.next = currentNodeNext;
        deletedIndexNode.next = null;
        this.length--;
        return this;
    }

    reverse() {
        if (!this.head.next) {
          return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
    
        while(second) {
          const temp = second.next;
          second.next = first;
          first = second;
          second = temp;
        }
    
        this.head.next = null;
        this.head = first;
        return this.printArray();
      }
  }
  
  const sampleLinkedList = new Linkedlist(10);
  // console.log(sampleLinkedList);
  
  sampleLinkedList.append(5);
  sampleLinkedList.append(16);
  // console.log(sampleLinkedList);
  
  sampleLinkedList.prepend(11);
  // console.log(sampleLinkedList);

  //console.log(sampleLinkedList.printArray());

  sampleLinkedList.insert(2,19);
  sampleLinkedList.insert(20,190);
  console.log(sampleLinkedList.printArray());

  sampleLinkedList.remove(2,19);
  console.log(sampleLinkedList.printArray());

  sampleLinkedList.reverse();
  console.log(sampleLinkedList.printArray());


// Building a Doubly Linked List from scratch
console.log("Doubly Linked List");

class DoublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        prev: null,
        next: null,
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        prev: null,
        next: null,
      };
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        prev: null,
        next: null,
      };
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return console.log(array);
    }
    insert(index, value) {
      //Check for proper parameters;
      if (index >= this.length) {
        console.log("yes");
        return this.append(value);
      }

      const newNode = {
        value: value,
        prev: null,
        next: null,
      };
      const leader = this.traverseToIndex(index - 1);
      const follower = leader.next;
      leader.next = newNode;
      newNode.prev = leader;
      newNode.next = follower;
      follower.prev = newNode;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      // Check Parameters
      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
  }

  let myLinkedList = new DoublyLinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  myLinkedList.printList();
  myLinkedList.insert(2, 99);
  //   myLinkedList.insert(20, 88);
  //   myLinkedList.remove(2);