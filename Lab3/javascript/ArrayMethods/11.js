function getAverageAge(users) {
    let avg = 0;
    for(let i=0;i<users.length();i++){
        avg += +users[i];
    }

    return avg / users.length();
  }
  
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); 