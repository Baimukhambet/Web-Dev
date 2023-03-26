def no_teen_sum(a, b, c):
  s = 0
  for i in [a, b, c]:
    if (i >= 13 and i <=14) or (i >=17 and i <= 19): continue
    s += i
  return s
