function shuffle(array) {
    array.sort(() => Math.random());
  }
let arr = [1, 2, 3];
shuffle(arr);
alert(arr);