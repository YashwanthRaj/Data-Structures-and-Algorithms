def function1(list_1):
    for i in list_1:
        print(i)

    print("User Given List")

    for j in list_1:
        for k in list_1:
            print(j+k)


user_list = []
user_list_len = int(input("Enter thr number of characters: "))

for i in range(user_list_len):
    a = int(input(f"Enter the {i}st Element: "))
    user_list.append(a)

function1(user_list)
