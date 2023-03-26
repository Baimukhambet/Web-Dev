def round_sum(a, b, c):
  s = 0
  for i in [a, b, c]:
    z = int(str(i)[-1])
    if z < 5:
      s += i - z
    else:
      s += i + (10 - z)
  
  return s
