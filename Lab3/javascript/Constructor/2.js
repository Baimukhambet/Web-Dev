function createCalculator(){
    this.read = function(){
        this.a = +prompt("Enter the first value:");
        this.b = +prompt("Enter the second value:")
    };

    this.sum = function(){
        return this.a + this.b;
    };

    this.mul = function(){
        return this.a * this.b;
    };
}

let calc = new createCalculator();
calc.read();
alert(calc.sum());
alert(calc.mul());