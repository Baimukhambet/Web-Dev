def in1to10(n, outside_mode):
  return True if (not outside_mode and( n >= 1 and n <= 10)) or ( outside_mode and(n <= 1 or n >= 10)) else False