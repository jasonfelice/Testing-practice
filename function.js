function stringLength(string) {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  }
  return -1;
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

class Calculator {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  add() {
    return this.x + this.y;
  }

  subtract() {
    return this.x - this.y;
  }

  divide() {
    return this.x / this.y;
  }

  multiply() {
    return this.x * this.y;
  }
}

function capitalize(string) {
  const newString = string.charAt(0).toUpperCase() + string.slice(1);
  return newString;
}

  module.exports = { stringLength, reverseString, Calculator, capitalize };