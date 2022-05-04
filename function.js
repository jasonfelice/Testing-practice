function stringLength(string) {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  }
  return -1;
}

function reverseString(string) {
  return string.split('').reverse().join('');
}



  module.exports = { stringLength, reverseString };