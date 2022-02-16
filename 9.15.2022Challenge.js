/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses! */

function createPhoneNumber(numbers){
	let theDigits = [];
	theDigits.push(...numbers)
	if (theDigits.length >= 9){
		console.log((`(${theDigits[0]}${theDigits[1]}${theDigits[2]}) ${theDigits[3]}${theDigits[4]}${theDigits[5]}-${theDigits[6]}${theDigits[7]}${theDigits[8]}${theDigits[9]}`))
  }
 
	
}

