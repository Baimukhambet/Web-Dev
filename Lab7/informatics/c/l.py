n = input()

result = 0
q = len(n) - 1

for i in n:
    result += 2**q * int(i)
    q -= 1

print(result)