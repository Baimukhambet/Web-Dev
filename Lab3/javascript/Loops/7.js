let number = prompt("Enter a number: ")
for(let i=2;i<number;i++){
    let flag = true;
    for(let j = 2; j<=Math.sqrt(i); j++){
        if(i%j == 0){
            flag = false;
            break;
        }
    }
    if(flag){
        alert(i);
    }
}
