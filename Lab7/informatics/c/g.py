num = int(input())

res = 0

for i in range(2, num + 1):
    res = i if not num % i else 0
    if(res): break

print(res)