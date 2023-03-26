def min(l):
    result = l[0]
    for num in l:
        if num < result: result = num
    return result

def main():
    l = list(map(int, input().split()))
    print(min(l))

main()