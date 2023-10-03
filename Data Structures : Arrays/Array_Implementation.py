# Sample code where we are creating a class and utilising objects to see the functionality of Arrays

class MyArray:

    def __init__(self, data):
        self.length = 0
        self.data = data

    def data_return(self, index):
        return self.data[index]

    def pushOperation(self, value):
        self.data.append(value)
        return self.data

    def popOperation(self):
        self.data.pop()
        return self.data

    def deleteArrayElement(self, index):
        self.data.pop(index)
        return self.data

arrr1 = [12,13,4,5,6,7,8,0,3]

array_obj1 = MyArray(arrr1)
print(array_obj1.data_return(3))

print(array_obj1.pushOperation('Name'))

print(array_obj1.popOperation())

print(array_obj1.deleteArrayElement(3))
