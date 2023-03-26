x = input()

flag = False

for i in x[::-1]:
    if i == '0' and flag:
        print(i, end = '')
    elif i == '0':
        continue
    else:
        flag = True
        print(i, end = '')