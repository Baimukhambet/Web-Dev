function sumInput() {
    let arr = [];
    while (true) {
      let val = prompt("A number please?", 0);
      if (val === "" || val === null || !isFinite(val)) break;
      arr.push(+val);
    }
    let sum = 0;
    for (let number of arr) {
      sum += number;
    }
    return sum;
  }
  alert( sumInput() );