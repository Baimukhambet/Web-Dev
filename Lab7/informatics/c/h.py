num = int(input())

res = 0

for i in range(1, num + 1):
    res = i if not num % i else 0
    if(res): print(res, end = ' ')
    res = 0

