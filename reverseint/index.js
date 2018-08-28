// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const sign = Math.sign(n);
  return parseInt(n
    .toString()
    .split('')
    .reverse()
    .join('')
  ) * sign;
}

function reverseInt1(n) {
  const sign = Math.sign(n);
  n = n * sign;
  let reversed = 0;
  while(n > 0) {
    const rem = n % 10;
    reversed = reversed * 10 + rem;
    n = parseInt(n / 10);
  }
  return reversed * sign;
}

module.exports = reverseInt;
