def is_leap(year):
    leap = False
    
    leap = True if (not year % 4 and  year % 100) or (not year % 400) else False
    
    return leap

year = int(input())
print(is_leap(year))