# Solustion using regular functions, this method will loop over array and determine if repetition exist
# Only drwaback is this will take O(n^2) time as two loops exit.

def func(mylist):
    for i in range(0, len(mylist)):
        for j in range(i + 1, len(mylist)):
            if mylist[i] == mylist[j]:
                return mylist[i]
    return 0


# Lets solve the same problem using hashtable dataset.
# Here there is only one loop, hence time complexity - O(n), better than the last code
def hashtable(mylist):
    mydict = {}
    for i in range(0, len(mylist)):
        if mylist[i] in mydict:
            return mylist[i]
        else:
            mydict[mylist[i]] = i
    return 0


mylist = [2, 1, 1, 2, 3, 4, 5]
x = hashtable(mylist)
print(x)