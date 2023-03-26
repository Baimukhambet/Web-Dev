num = int(input())

res = 0
counter = 0

while(num != 1):
    if not num % 11:
        counter += 1
        num //= 11
    if not num % 7:
        counter +=1
        num //= 7
    if not num % 5:
        counter +=1
        num //= 5
    if not num % 3:
        counter += 1
        num //= 3
    if not num % 2:
        counter += 1
        num //= 2

print(counter + 1)
    

