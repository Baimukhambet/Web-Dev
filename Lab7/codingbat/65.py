def end_other(a, b):
  a = a.lower()
  b = b.lower()
  return True if a[len(a) - len(b)::] == b or b[len(b) - len(a)::] == a else False
