class Hashtable:
    def __init__(self):
        self.size = 16  # We are defining array size
        self.hashmap = [[] for i in range(self.size)]  # Here we are defining an array with 16 inner arrays

    def __str__(self):
        return str(self.__dict__)

    def hash(self, key):  # Here we are defining the hash function. Our formula - Remainder of [(length of key) / (array size)]
        return len(key) % self.size

    def put(self, key, value):
        hash_value = self.hash(key)
        reference = self.hashmap[hash_value]
        for i in range(len(reference)):
            if reference[i][0] == key:
                reference[i][1] = value
                return None
        reference.append([key, value])
        return None

    def get(self, key):
        hash_value = self.hash(key)
        reference = self.hashmap[hash_value]
        for i in range(len(reference)):
            if reference[i][0] == key:
                return reference[i][1]
        return -1

    def remove(self, key):
        hash_value = self.hash(key)
        reference = self.hashmap[hash_value]
        for i in range(len(reference)):
            if reference[i][0] == key:
                reference.pop(i)
                return None
        return None


h=Hashtable()
h.put('grapes',1000)
h.put('apples',10)
h.put('ora',300)
h.put('banan',200)
print(h.get('grapes'))
print(h)
h.remove('apples')
print(h)