// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

// Another way to reverse string
function reverse1(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function reverse2(str) {
  return str.split('')
  .reduce((reversed, char) => {
    return char + reversed;
  }, '');
}

module.exports = reverse;
