// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
  return word
    .split('')
    .map(function (l, i) {
      if (l.toUpperCase() === l) return i;
    })
    .filter(function (i) {
      return i != null;
    });
};

// SUGGESTED SOLUTION
// var capitals = function (word) {
//   return word.split('').reduce(function (memo, v, i) {
//     return v === v.toUpperCase() ? memo.concat(i) : memo;
//   }, []);
// };
