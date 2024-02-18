"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let string1 = 'apple';
let string2 = 'orange';
let number1 = 10;
let number2 = 5;
let array = ['apple', 'banana', 'cherry'];
// Tests for equality and inequality with strings
console.log("Are string1 and string2 equal? I predict False.");
console.log(string1 == string2); // False
console.log("Are string1 and string2 not equal? I predict True.");
console.log(string1 != string2); // True
// Tests using the lowercase function
console.log("Is string1 in lowercase equal to 'apple'? I predict True.");
console.log(string1.toLowerCase() === 'apple'); // True
// Numerical tests
console.log("Is number1 equal to number2? I predict False.");
console.log(number1 == number2); // False
console.log("Is number1 greater than or equal to number2? I predict True.");
console.log(number1 >= number2); // True
// Tests using "and" and "or" operators
console.log("Is number1 greater than 5 and string1 is 'apple'? I predict True.");
console.log(number1 > 5 && string1 === 'apple'); // True
console.log("Is number2 less than 2 or string2 is 'orange'? I predict False.");
console.log(number2 < 2 || string2 === 'orange'); // False
// Test whether an item is in an array
console.log("Is 'banana' in the array? I predict True.");
console.log(array.includes('banana')); // True
// Test whether an item is not in an array
console.log("Is 'grape' not in the array? I predict True.");
console.log(!array.includes('grape')); // True
