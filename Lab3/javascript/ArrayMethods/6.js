function Calculator() {

    this.operation = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.operation[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.operation[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.operation[name] = func;
    };
  }