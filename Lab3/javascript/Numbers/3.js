function read(){
    let input;
    do{
        input = prompt("Enter a number!", 0);
    }while(!(typeof input == Number) || input != null || input != '');
    if(input === null || input === ''){
        return null;
    }
    return +input;
}

alert(`Hello, ${read}`);