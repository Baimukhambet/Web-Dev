def power(a, b):
    return a ** b

l = list(map(float, input().split()))

print(power(l[0], int(l[1])))