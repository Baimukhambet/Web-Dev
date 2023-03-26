a = int(input())
b = int(input())

result = ""

for i in range(a, b+1):
    if not i % 2: result += str(i) + " "

print(result)