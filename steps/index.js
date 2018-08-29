// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.
// --- Examples
//   steps(2)
//       '#'
//       '##'
//   steps(3)
//       '#'
//       '##'
//       '###'
//   steps(4)
//       '#'
//       '##'
//       '###'
//       '####'

function steps(n) {
  for (let row=0; row<n; row++) {
    let stair = '';
    for (let col=0; col<=row; col++) {
        stair += '#';
    }
    console.log(stair);
  }
}

module.exports = steps;
