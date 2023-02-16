function pow(x, n){
    let output = x;
    for(let i = 0; i < n - 1; i++){
        output *= x;
    }
    return output;
}

let x = prompt("Enter value: ", 0);
let n = prompt("Enter power: ", 0);

if(n < 1){
    alert("Not a valid power");
}else{
    alert(pow(x, n))
}