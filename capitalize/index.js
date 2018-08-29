// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

function capitalize1(str) {
  const len = str.length;

  if(len === 0) return str;

  let capitalized = str[0].toUpperCase();
  for (let i=1; i < len; i++) {
    if (str[i - 1] === ' ') {
      capitalized += str[i].toUpperCase();
    } else {
      capitalized += str[i];
    }
  }

  return capitalized;
}

module.exports = capitalize;
