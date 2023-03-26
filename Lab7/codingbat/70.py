def sum13(nums):
  if not len(nums): return 0
  
  sum = 0
  flag = False
  
  for n in nums:
    if n == 13: 
      flag = not flag
      continue
    if flag:
      flag = not flag
      continue
    sum += n
  
  return sum