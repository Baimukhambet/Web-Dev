def xyz_there(str):
  if len(str) < 3: return False
  for i in range(0, len(str)-2):
    if (str[i] == 'x' and str[i+1] == 'y' and str[i+2] == 'z' and (i == 0 or str[i - 1] != '.')):
      return True
  return False
