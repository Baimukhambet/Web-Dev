function getMaxSubSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      let start = 0;
      for (let j = i; j < arr.length; j++) {
        start += arr[j];
        sum = Math.max(sum, start);
      }
    }
  
    return sum;
  }