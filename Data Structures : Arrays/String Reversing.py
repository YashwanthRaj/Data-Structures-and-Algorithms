# Exercise : Reversing a String/Array [Creating a function that reverses a string]

# Converting it to array
# def ReverseString(string1):
#     arr_string = []
#     for i in string1:
#         arr_string.append(i)
#
#     rev_array = []
#     j = len(arr_string) -1
#     while j >= 0:
#         rev_array.append(arr_string[j])
#         j=j-1
#
#     rev_string = ''
#     for k in rev_array:
#         rev_string+=k
#
#     return rev_string
#
#
# Name = input('Enter your Array: ')
# print(ReverseString(Name))



# Without Converting it to an array
def reverse_string(str):
    revStr = ''
    length = len(str)-1
    j = length
    while j>=0:
        revStr += str[j]
        j -= 1

    return revStr


Name = input('Enter String: ')
print(reverse_string(Name))


# Simplest Way to reverse a string in python
txt = "Hello World"[::-1]
print(txt)