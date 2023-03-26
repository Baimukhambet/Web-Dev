def sum67(nums):
  open = False
  sum = 0
  for n in nums:
    if n == 6:
      open = True
      continue
    if n == 7:
      open = False
      continue
    if not open: sum += n
  
  return sum
    
print(sum67([1, 1, 6, 7, 2]))