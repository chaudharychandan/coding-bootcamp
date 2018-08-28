// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chucked = [];
  for (let elem of array) {
    let lastChunk = chucked[chucked.length - 1];
    if (!lastChunk || lastChunk.length === size) {
      chucked.push([elem]);
    } else {
      lastChunk.push(elem);
    }
  }

  return chucked;
}

function chunk1(array, size) {
  let index = 0, chunked = [];
  while(index < array.length) {
    chunked.push(array.slice(index, index + size));
    index = index +  size;
  }

  return chunked;
}

module.exports = chunk;