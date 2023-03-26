n = int(input())
h = n//3600
n %= 3600
m = n//60
n %= 60

if(len(str(m)) == 1):
    m = '0' + str(m)
if(len(str(n)) == 1):
    n = '0' + str(n)

print("{}:{}:{}".format(h%24, m, n))