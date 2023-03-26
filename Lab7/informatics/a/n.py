n = int(input())
minutes = 45 * n + ((n-1)//2 * 20) + (5 * ((n-1) % 2))
hours = minutes // 60

print("{} {}".format(9 + hours, minutes%60))