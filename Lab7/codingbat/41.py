def sum2(nums):
  if not len(nums): return 0
  if len(nums) >= 2:
    return nums[0] + nums[1]
  s = 0
  for i in nums: s += i
  return s
  
  
