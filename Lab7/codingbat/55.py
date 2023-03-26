def lone_sum(a, b, c):
  s = 0
  if a != b and a != c: s += a
  if a != b and b != c: s += b
  if c != b and a != c: s += c
  
  return s
  
  
