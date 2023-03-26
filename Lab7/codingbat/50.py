def alarm_clock(day, vacation):
  w = True if day == 0 or day == 6 else False
  return '7:00' if not w and not vacation else '10:00' if (w and not vacation) or (not w and vacation) else 'off'
