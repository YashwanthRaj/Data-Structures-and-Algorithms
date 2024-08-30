// PROGRAM 1

// We are trying to find out the run time for the following code

const array1 = ["abch", "jijjjmmy", "Targ", "jimmy"];
const array2 = [
    "sfsdfd",
    "sdfsf",
    "adfgdfg",
    "wdfjsf",
    "efwef",
    "sdfsdfs",
    "dfnfdfv",
    "awefwieng",
    "wefwe",
    "sdfsf",
    "jimmy",
];

const newArray = new Array(1000).fill("jimmy"); // With this line of code we are able to create an array of 1000 elements with the value "jimmy"

function findElement(anyArray) {
    let t0 = performance.now(); // Starting the timer
    for (let i = 0; i < anyArray.length; i++) {
        if (anyArray[i] === "jimmy") {
            console.log("Found Jimmy");
        }
    }
    let t1 = performance.now(); // Stopping the timer
    // The timer will give us the time in milliseconds
    console.log("The run time is " + (t1 - t0) + " milliseconds");
}

findElement(newArray);  // O(n)


// PROGRAM 2
const arrayForConstTime = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

function findChar1(array) {
    console.log(array[0]);
}

findChar1(arrayForConstTime); // This is O(1)


// PROGRAM 3 - Calculation of Big O exercise
// What is the Big O of the below function? 
function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) { // O(n)
      let x = i + 1; // O(n)
      let y = i + 2; // O(n)
      let z = i + 3; // O(n)

    }
    for (let j = 0; j < input; j++) { // O(n)
      let p = j * 2; // O(n)
      let q = j * 2; // O(n) 
    }
    let whoAmI = "I don't know"; // O(1)
  }
// Big O = 4 + 7n = O(n)

// PROGRAM 4
// We write a function to log all pairs in an array

const boxes = [1, 2, 3, 4, 5];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++) {
      console.log(array[i],array[j]);
    }
  }
}

logAllPairsOfArray(boxes);


// PROGRAM 5

function numberGames(num) {
    console.log("The numbers inside the array of numbers:");
    num.forEach(function (num) {
      // Printing all the numbers inside the array
      console.log(num);
    });
  
    console.log("The sum of numbers inside the array of numbers:");
    num.forEach(function (firstNum) {
      num.forEach(function (secondNum) {
        console.log(firstNum + secondNum);
      });
    });
  }
  
sampleArrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numberGames(sampleArrayOfNumbers);
  
// The Big O of the above function is O(n + n^2), but by rule 4, we can drop the n term as that is not dominant.


// PROGRAM 6

function boo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log("boo!!!");
    }
}
  
boo([1, 2, 3, 4, 5]); // Space complexity is O(1)

//  PROGRAM 7

function returnBoo(n) {
    let character1 = [];
    for (let i = 0; i < n; i++) {
      character1[i] = i;
    }
    return character1;
  }
  
  console.log(returnBoo(4)); // Space Complexity - O(n)  