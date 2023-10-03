# Given two sorted arrays, we have to merge them

def mergeSortedArray(arr1, arr2):
    if len(arr1) == 0 or len(arr2) == 0:  # Checking if any array is empty
        return arr1 + arr2

    mergedArray = []

    i = 0
    j = 0
    while i<len(arr1) and j<len(arr2):
        if arr1[i] < arr2[j]:
            mergedArray.append(arr1[i])
            i += 1
        else:
            mergedArray.append(arr2[j])
            j += 1

    return mergedArray + arr1[i:] + arr2[j:]  # arr1[i:] + arr2[j:] are there to include the remaining elements in the array


array1 = [1,3,5,7,9]
array2 = [2,4,6,8,10]
print(mergeSortedArray(array1,array2))


# Using inbuilt functions in python
# def mergesortedarr(a,b):
#   x=a+b
#   x.sort()
#   return x
#
# a=[1,2,3,4]
# b=[3,7,9,12]
# qw=mergesortedarr(a,b)
# print(qw)
