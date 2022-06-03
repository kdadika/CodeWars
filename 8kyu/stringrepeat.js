// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
	let newString = ''
	while(n-- > 0) newString += s
	return newString
  }

  // SUGGESTED SOLUTION
//   function repeatStr (n, s) {
// 	return s.repeat(n);
//   }