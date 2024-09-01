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

# Chapter 2 : Data Structures

A Data Structure is a collection of values. Algorithms are the steps or processes that we put into place in order to manipulate data structures. Programs = Data Structures + Algorithms.

For the values stored in a data structure, it can have relations between each value and have some functions applied to them. Each data structure is specialized for its own purposes.

# Arrays

This data Structure organizes elements sequentially, i.e one after another in memory. Because they are stored together in memory, they have the smallest footprint in memory. Most useful for iteration. 

lookup - O(1)

push - O(1)

insert - O(n)

delete - O(n)

### Array Operations

**push** - To add an element at the end of an array - O(1) as the computer knows the position of all elements in the array

**pop** - To remove an element from the end of an array - O(1) as the computer knows the position of all elements in the array

**unshift** - To add an element at the start of an array - O(n) as we have to iterate and move all the elements to the right and reassign the indexes. 

splice - To add/delete an element from an array with a given position. - O(n) as we have to iterate through all the elements.  

There are two types of arrays - Static and Dynamic. This concept is available in languages like C++. In languages like javascript and python, we have only dynamic array. 

### Static Arrays

The size of array is fixed, this means that we need to specify the size of array ahead of time. 

lookup - O(1)

push - O(1)

insert - O(n)

delete - O(n)

### Dynamic Arrays

In dynamic arrays, it can help us copy and rebuild an array to a new location with more memory if we wanted more. 

lookup - O(1)

append - O(1) - Can by O(n)

insert - O(n)

delete - O(n)

Sometimes when there is no space in the array and we perform an append operation, the array will be iterated and shifted to a new location, hence resulting in O(n). 

## Javascript Concepts

### Objects

Objects are whats called **reference types** in Javascript. Reference type, unlike the primitive type which is created by the javascript, is created by the programer. When we create an object, it points to a memory location. So if we create an object and store it in a variable, the variable will have a reference to the memory location and not the value. Hence when we create two objects with same value, when we check if they are equal, it will return false as even though it has same value, its pointing to different locations making it different. 

**Context** gives us an idea of inside which object are we in the program. In javascript when we use *this* keyword, we can get the context. Usually it shows window when we are in regular code. But when we print *this* inside an object that we created, we will get the object name. 

**Instantiation** is when we copy an object and reuse the code. We create instances or multiple copy of an object. We can create a main class and then using extend keyword we can create an instance of the parent class and use its properties. 

### Strings

Strings are just arrays of characters. To convert a string into array, use split(””) method on string and use functions of arrays. And if we have a array, we can use join(””) to make it into a string. 

## Pros of Using an Array

Fast Lookups

Fast push / pop

Ordered

## Cons of Using an Array

Slow Inserts

Slow deletes

Fixed size if we are using static arrays

# Hash Tables

In python they are called dictionaries, in javascript they are called objects. Stored in key value pairs. The key is used as an index of where to find the value in the memory. It will have a hash function which will take in key and give out the index for that value. Hash function is a function that generates an value of fixed length for any given input. We use it because it gives really fast data access. 

insert O(1)

lookup O(1)

delete O(1)

search O(1)

When the hash function maps two values to same address location, its called collision. During collision, the Big O becomes O(n). 

Inside a class in javascript, if the method has _ in front of it, it denotes that it is private property for the class and should not be used outside of class. 

### Arrays vs Hash Tables

Arrays are great when iterating, but slow in searching. Hash tables are good with searching and inserting in a particular location. But slow in iteration.

**Arrays**

search O(n)

lookup O(1)

push O(1)

insert O(n)

delete O(n)

**Hash Tables**

search O(n)

lookup O(1)

insert O(n)

delete O(n)

### Pros of Hash Table

Fast Lookups [if there is no collision]

Fast inserts

Flexible keys

### Cons of Hash Table

Unordered 

Slow Key Iteration.
