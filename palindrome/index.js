// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const reversestring = require('../reversestring/index');

function palindrome(str) {
  return str === reversestring(str);
}

function palindrome2(str) {
  return str
    .split('')
    .every((char, index) => char === str[str.length - index - 1]);
}

function palindrome3(str) {
  const fullPath = str.length, halfPath = fullPath / 2;
  for(let i = 0; i < halfPath; i++){
    debugger;
    if(str[i] !== str[fullPath - i - 1]) return false;
  }
  return true;
}

module.exports = palindrome;
