# Data-Structures-and-Algorithms
Udemy course contents of course "Master the Coding Interview: Data Structures + Algorithms" by Andrei. We learn about different Data structures and Algorithms in Python Language. 

1. Big O notation

2. Data structures:

* Arrays
* Hash Tables
* Singly Linked Lists
* Doubly Linked Lists
* Queues
* Stacks
* Trees (BST, AVL Trees, Red Black Trees, Binary Heaps)
* Tries
* Graphs

3. Algorithms:

* Recursion
* Sorting
* Searching
* Tree Traversal
* Breadth First Search
* Depth First Search
* Dynamic Programming

# Chapter 1: Big O Notation

Runtime - How long does it take a function/program/Task to run a certain problem. 

Big O will tell us how well a problem is solved. A good code is scalable and readable. The scalability factor of the code is the Big O. 

In the program 1 where we are dealing with a simple for loop, we notice that as the sample array size is increasing, the time taken is also increasing. When we run the same code in different machine, there will be a time difference between the runtime in the different machines. Hence we cannot calculate which code is faster just based on the time take as that is different in every machine. So now how can we determine which code is better? How can we determine a code is scalable, i.e code will slow down once the array/ input size increases ? 

These questions are answered by Big O notations. It calculates how long a code a code takes to run regardless of computer differences. 

When we Talk about Big O and scalability, we are talking about how much the code will slow down when the input code gets bigger and bigger. The less it slows down, the better it is.  

![n - input elements](https://prod-files-secure.s3.us-west-2.amazonaws.com/f0cbbd51-b278-480c-b5ae-a8ddedc59569/eda3c2e8-1144-4ee5-a156-644b07ac2c3f/image.png)

n - input elements

Instead of calculating the time, we can take into consideration the number of operations taken by the function as each operation will take some time. 

## Time Complexity

### O(n) → Linear Time

In the Program 1, we can see that as the number of elements increase, the number of operations increase linearly. Hence we write O(n) where n represents the number of inputs. 

### 0(1) → Constant Time

In Program 2, we can see that we are just finding the first element in the array. The program will not take more time as the input size increases. Hence we write O(1) which represents constant time. Even if there are more than 1 operation like print the second element, or third element, the time is still O(1) as it is still constant. 

### O(n^2) → Nested Loops

In Program 4, we notice that unlike other programs, the loops are nested rather than being one after the other. Hence unlike + that we did before for the n value, we multiply the n, hence O(n^2). 

### O(n!) → Factorial Time

This means we are adding a nested loop for every input. Never write any program which has O(n!) as this is worst. 

## Rules  in calculating big O

**Rule 1:**  Worst case

when calculating Big O, we always take the worst case into consideration. By worst case we mean when the situation when the code will run the longest, or the loop will run till the last element. 

**Rule 2: Remove constants**

When calculating if we get O(n/2 + 100) or something like that, we ignore all the constants and we end up with just the O(n). 

**Rule 3: Different terms for inputs**

When there are 2 variable that we are concerned about, then we use different terms to represent them in the Big O notation. 

**Rule 4: Drop Non Dominants**

We say a term is dominating when value of one term is greater than the other term. When there are cases like in Program 5, where we get O(n + n^2), we can drop n as that is a non domination term. Hence the Big O becomes O(n^2). 

### Definition of good code

The three pillars of programing - Readable, Speed (Time Complexity) and Memory (Space Complexity). Usually when we are concerned with solving and developing good code, there is a tradeoff between speed and memory. 

## Space Complexity

This concerns with the space that a program consumes. When we talk about space complexity, we are looking for extra space that the program takes, not including the input size. In Program 6, we neglect the function call as that is the input part of program and we are concerned with what is inside the function and how much space is created in addition to the input. Inside the function, apart from the i variable that is being created for looping, there is no space being occupied. It is just printing a character. Hence the space complexity is O(1). 

When we look at program 7, the code in addition to creating a variable i for the loop, we are creating a data structure which is array, which we are filling in with data in the loop. Hence the space complexity of this program is O(n)

## Big Oh Cheat Sheet

**O(1)** Constant – no loops
**O(log N)** Logarithmic – usually searching algorithms have log n if they are sorted (Binary Search)
**O(n) Linear** – for loops, while loops through n items
**O(n log(n))** Log Linear – usually sorting operations
**O(n^2)** Quadratic – every element in a collection needs to be compared to ever other element. Two nested loops
O(2^n) Exponential – recursive algorithms that solves a problem of size N 

O(n!) Factorial – you are adding a loop for every element
Iterating through half a collection is still O(n)
Two separate collections: O(a * b)

## What can cause Time in a Function ?

Operations (+, -, *, /)

Comparisons (<, >, ==)

Looping (for, while)

Outside Function call (function())

## What causes space complexity?

Variables

Data Structures

Function Call

Allocations
