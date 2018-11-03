// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid1(n) {
  const cols = (n * 2) - 1;
  const mid = Math.floor(cols / 2);
  for (let row = 0; row < n; row++) {
    let step = '';
    for (let col = 0; col < cols; col++) {
      if (mid-row <= col && mid+row >= col) {
        step += '#';
      } else {
        step += ' ';
      }
    }
    console.log(step);
  }
}

function pyramid(n, row = 0, level = '') {
  const cols = 2 * n - 1;
  const mid = Math.floor(cols / 2);
  const levelLen = level.length;

  if (row === n) {
    return;
  }

  if(levelLen === cols) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  let add;

  if(mid - row <= levelLen && mid + row >= levelLen) {
    add = '#';
  } else {
    add = ' ';
  }

  pyramid(n, row, level + add);
}

module.exports = pyramid;
