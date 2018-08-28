// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  const maxCharMap = {
    char: null,
    count: 0
  };

  for(let char of str) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    if (charMap[char] > maxCharMap.count) {
      maxCharMap.char = char;
      maxCharMap.count = charMap[char];
    }
  }

  return maxCharMap.char;
}

module.exports = maxChar;
