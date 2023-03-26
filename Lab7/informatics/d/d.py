myl = list(map(int, input().split()))

for i in range(1, len(myl)):
    if myl[i] > myl[i - 1]: print(myl[i], end = ' ')