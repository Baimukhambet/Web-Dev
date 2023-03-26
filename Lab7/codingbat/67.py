def count_evens(nums):
  counter = 0
  for n in nums:
    counter = counter + 1 if not n % 2 else counter
  
  return counter
