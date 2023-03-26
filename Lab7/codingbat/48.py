def caught_speeding(speed, is_birthday):
    return 0 if (speed <= 60 and not is_birthday) or (speed <= 65 and is_birthday) else 1 if (speed >= 61 and speed <=80 and not is_birthday) or (speed >= 61 and speed <=85 and is_birthday) else 2
