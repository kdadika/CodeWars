// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
	return Array.from(new Array(b - a + 1), x => a++)
   }

   // SUGGESTED
//    function between(a, b) {
// 	arr = []
// 	for(i = a;i <= b; i++){ 
// 		arr.push(i)
// 	}
// 	return arr
//   }