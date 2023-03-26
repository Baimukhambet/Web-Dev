a, b = int(input()), int(input())

result = ''

for i in range(a, b + 1):
    if not i**0.5 % 1: result += str(i) + ' '

if(len(result)): print(result) 

