function camelize(input) {
    return input.split('-') .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join(''); 
  }