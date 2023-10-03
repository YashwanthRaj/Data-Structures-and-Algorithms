# Array Declaration
array1 = ['a','b','c','d']
# If size taken by each element is 4, then array size -> 4*4 = 16

print(array1[0]) # Printing the first Element
print(array1[1]) # Printing the second element
print(array1[-1]) # Printing the last Element

# OPERATIONS
# PUSH operation [Python -> append]- Inserts element at the end of the array
array1.append('e')  # Time complexity - O(1)
print(array1)

# POP operation - Removes the last element form the array
array1.pop()  # Time complexity - O(1)
print(array1)

array1.pop()  # One more time, we can see that the last elements are being removed
print(array1)

# Adding an element at custom position
array1.insert(0,'ab') # We define index where we want to store the element and ask the element
print(array1) # Time Complexity - O(n)

array1.insert(3,'gh')
print(array1)


# Basic Information
#Array native python methods :-
#append()	Adds an element at the end of the list
#clear()	Removes all the elements from the list
#copy()	Returns a copy of the list
#count()	Returns the number of elements with the specified value
#extend()	Add the elements of a list (or any iterable), to the end of the current list
#index()	Returns the index of the first element with the specified value
#insert()	Adds an element at the specified position
#pop()	Removes the element at the specified position
#remove()	Removes the first item with the specified value
#reverse()	Reverses the order of the list
#ort()	Sorts the list

#List objects are implemented as arrays.
#They are optimized for fast fixed-length operations and incur O(n) memory movement costs for pop(0) and insert(0, v)
#operations which change both the size and position of the underlying data representation.

#For in depth information on arrays
#https://docs.python.org/3/tutorial/datastructures.html

#to implement arrays as a stack
#https://docs.python.org/3/library/collections.html#collections.deque