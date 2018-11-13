// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  const memo = {};

  return function rec(n) {
    if (n < 2) return n;

    if(memo[n]) return memo[n];

    memo[n-1] = rec(n - 1), memo[n-2] = rec(n - 2);
    return memo[n-1] + memo[n-2];
  }(n);
}

module.exports = fib;
