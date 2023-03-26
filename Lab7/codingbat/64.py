def count_code(str):
  if len(str) < 4: return 0
  counter = 0
  for i in range(0, len(str) - 3):
    if str[i] == 'c' and str[i+1] == 'o' and str[i + 3] == 'e': counter += 1
  return counter
