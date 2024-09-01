// Creating an array
const array1 = ['a','b','c','d'];

console.log(array1[2]);  // Lookup operation in arrays O(1)

// Push Operation O(1)
array1.push("e");
console.log(array1);

// Pop Operation O(1)
array1.pop();
console.log(array1);

// Unshift Operation O(n)
array1.unshift("f");
console.log(array1);

// Splice Operation O(n)
array1.splice(1, 0, "SplicedElement");
console.log(array1);


// Building an array from scratch
// A simple representation of how Arrays work underneath the hood

class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
  
    printArray() {
      console.log(this.data);
    }
  
    get(index) {
      return this.data[index];
    }
  
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.length; // This is what the inbuilt function usually returns
    }
  
    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
  
    delete(index) {
      const item = this.data[index];
      this.shiftItems(index);
      return item;
    }
  
    shiftItems(index) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i+1];
      }
      delete this.data[this.length - 1];
      this.length -- ;
    }
  }
  
  const newArray = new MyArray();
  
  newArray.push('Hello');
  newArray.push('My');
  newArray.push('Name');
  newArray.push('Is');
  newArray.push('Yashwanth');
  newArray.printArray();
  
  //newArray.pop();
  //newArray.printArray();
  
  newArray.delete(1);
  newArray.printArray();
  
  
  
// Reverse a String

function reverseString1(myString) {
    // Input validation 
    if (typeof myString !== "string" || myString.length < 2) {
      return "Somethings wrong I can feel it!!!"
    } else {
      let finalAnswer = [];
      for (let i = myString.length - 1; i >= 0; i--) {
        finalAnswer.push(myString[i]);
      }
      return finalAnswer.join('');
    }
  }
  
  // In javascript, there is an inbuilt function called reverse()
  function reverseString2(str) {
    return str.split("").reverse().join("");
  }
  
  const myString = 'abcdefghijk';
  console.log(reverseString1(myString));
  console.log(reverseString2(myString));
  
// Program to merge Sorted Array

const mergeSortedArray = (arr1, arr2) => {
    const mergedArray = [];
    let arr1Pointer = 0;
    let arr2Pointer = 0;
  
    // Traverse both arrays and merge them in sorted order
    while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
      if (arr1[arr1Pointer] <= arr2[arr2Pointer]) {
        mergedArray.push(arr1[arr1Pointer]);
        arr1Pointer++;
      } else {
        mergedArray.push(arr2[arr2Pointer]);
        arr2Pointer++;
      }
    }
  
    // If there are remaining elements in arr1, add them to mergedArray
    while (arr1Pointer < arr1.length) {
      mergedArray.push(arr1[arr1Pointer]);
      arr1Pointer++;
    }
  
    // If there are remaining elements in arr2, add them to mergedArray
    while (arr2Pointer < arr2.length) {
      mergedArray.push(arr2[arr2Pointer]);
      arr2Pointer++;
    }
  
    return mergedArray;
  }
  
const array11 = [0, 2, 4, 6, 8];
const array2 = [1, 3, 5, 7, 9];
  
console.log(mergeSortedArray(array11, array2));