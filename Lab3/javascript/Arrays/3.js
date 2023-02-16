let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // answer: outputs the array;