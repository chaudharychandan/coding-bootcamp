// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  stringA = removeSpecialCharacters(stringA);
  stringB = removeSpecialCharacters(stringB);

  if (stringA.length !== stringB.length) {
    return false;
  } else {
    let stringAMap = buildCharMap(stringA);
    return compareCharMap(stringAMap, stringB);
  }
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }

  return charMap;
}

function compareCharMap(map, str) {
  let isAnagram = true;
  for (let char of str) {
    if (!map[char]) {
      isAnagram = false;
      break;
    } else {
      map[char] = map[char] - 1;
    }
  }
  return isAnagram;
}

function removeSpecialCharacters(str) {
  return str.replace(/[^\w]/g, '').toLowerCase();
}

function anagrams1(stringA, stringB) {
  return sortString(removeSpecialCharacters(stringA)) === sortString(removeSpecialCharacters(stringB));
}

function sortString(str) {
  return str.split('').sort().join('');
}

module.exports = anagrams;
