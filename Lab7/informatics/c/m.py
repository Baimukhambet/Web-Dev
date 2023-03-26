n = int(input())

counter = 0

for i in range(0, n):
    if not int(input()): counter += 1

print(counter)