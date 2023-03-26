def lucky_sum(a, b, c):
  s = 0
  for i in [a, b, c]:
    if i == 13: break
    s += i
  return s
