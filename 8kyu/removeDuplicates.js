// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  return a.filter(function (num, index, array) {
    return array.indexOf(num) === index;
  });
}

// SUGGESTED
// function distinct(a) {
//   return [...new Set(a)];
// }
