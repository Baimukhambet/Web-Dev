function Accumulator(value){
    this.val = value;

    this.read = function(){
        let add = +prompt("Enter value to add:", 0)
        this.val += add;
    };
}

let acc = new Accumulator(1);
acc.read();
acc.read();
alert(acc.val);