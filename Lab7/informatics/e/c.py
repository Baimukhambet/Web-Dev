def xor(x, y):
    return 1 if (x and not y) or (y and not x) else 0

l = list(map(int, input().split()))

print(xor(l[0], l[1]))