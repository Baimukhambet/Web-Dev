myl = list(map(int, input().split()))

for i in range(0, len(myl) - 1):
    if (myl[i] > 0 and myl[i + 1] > 0) or (myl[i] < 0 and myl[i + 1] < 0):
        print("{} {}".format(myl[i], myl[i + 1]))
        break
