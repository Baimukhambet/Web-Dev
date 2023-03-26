n = int(input())
h = n//60
s = (n - h*60)

print("{} {}".format(h%24, s))