a, b, c, d = int(input()), int(input()), int(input()), int(input())

result = ""

for i in range(a, b + 1):
    if i % d == c: result += str(i) + ' '

if(len(result)): print(result)