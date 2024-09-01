// Hash Tables / Dictionary / Objects 

let person = {
    name : "Yashwanth",
    age : 22,
    dob : "27 May 2002",
    university : "George Washington University",
    info : function () {
      console.log("Hello I am Yashwanth, I am a graduate student at GWU")
    }
  }
  
  console.log(person.name);  // O(1)
  person.program = "Masters";  // O(1)
  person.info();

// Creating a hash function from scratch

class hashTable {
    constructor(size) {
      this.data = new Array(size);
    }
    
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }
    
    set(key, value) {
      let position = this._hash(key);
      
      if(!this.data[position]) {
        this.data[position] = [];
      }
      this.data[position].push([key, value]);
   
      return position;
    }
    
    get(key) {
      let position = this._hash(key);
      let currentPair = this.data[position];
      
      if (currentPair) {
        for ( let i = 0; i < currentPair.length; i++) {
          if ( currentPair[i][0] === key) {
            return currentPair[i][1];
          }
        }
        return undefined;
      }
    }
    
    keys() {
      const keyArrays = [];
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i]) {
          keyArrays.push(this.data[i][0][0]);
        }
      }
      return keyArrays;
    }
  }
  
  const myHashTable = new hashTable(50);
  
  myHashTable.set('grapes', 10000);
  myHashTable.set('apples',808080);
  console.log(myHashTable);
  
  console.log(myHashTable.get('grapes'));
  
  console.log(myHashTable.keys());


// Check and return first reccuring integer in an array

  function checkReccuringInteger(array1) {
    let uniqueElementArray = [];
    
    for (let i = 0; i < array1.length; i++) {
      if (uniqueElementArray.includes(array1[i])) {
        console.log("The first recurring element is: ", array1[i]);
        return array1[i];
      } else {
        uniqueElementArray.push(array1[i]); // Use parentheses instead of square brackets
      }
    }
    return undefined;
  }
  
const sampleArray1 = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 9, 9, 0];
const sampleArray2 = [2, 3, 4, 3, 5, 76, 89, 0];
const sampleArray3 = [3, 4, 5, 6, 7];
  
console.log(checkReccuringInteger(sampleArray1)); // Output: 4
console.log(checkReccuringInteger(sampleArray2)); // Output: 3
console.log(checkReccuringInteger(sampleArray3)); // Output: undefined
  
  