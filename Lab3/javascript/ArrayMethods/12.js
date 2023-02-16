function unique(arr) {
    let output = [];
    for (let str of arr) {
      if (!output.includes(str)) {
        output.push(str);
      }
    }
    return output;
  }
  
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); 