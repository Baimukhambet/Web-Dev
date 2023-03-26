l = list(map(int, input().split()))

max = l[0]

for i in l:
    if i > max: max = i

for index, i in enumerate(l):
    if i == max:
        print("{} {}".format(i, index))
        break