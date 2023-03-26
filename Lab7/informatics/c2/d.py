n = int(input())

if n == 1: 
    print("YES")
    exit()

while(n > 2):
    n /= 2


if n == 2: print("YES")
else: print("NO")