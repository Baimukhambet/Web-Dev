def centered_average(nums):
  nums.sort()
  result = 0
  for i in range(1, len(nums) - 1):
    result += nums[i]
  
  return result // (len(nums) - 2)