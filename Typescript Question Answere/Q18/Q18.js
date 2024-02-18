"use strict";
//Q18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
let placesToVisit = ["Tokyo", "Paris", "New York", "Marrakech", "Sydney"];
// Print your array in its original order.
console.log("Original Order:", placesToVisit);
// Print your array in alphabetical order without modifying the actual list.
let alphabeticalOrder = [...placesToVisit].sort();
console.log("Alphabetical Order:", alphabeticalOrder);
// // // Show that your array is still in its original order by printing it.
console.log("Original Order (still):", placesToVisit);
// // Print your array in reverse alphabetical order without changing the order of the original list.
let reverseAlphabeticalOrder = [...placesToVisit].sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order:", reverseAlphabeticalOrder);
// // Show that your array is still in its original order by printing it again.
console.log("Original Order (still):", placesToVisit);
// // Reverse the order of your list. Print the array to show that its order has changed.
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// // Reverse the order of your list again. Print the list to show it’s back to its original order.
placesToVisit.reverse();
console.log("Original Order (after reversing again):", placesToVisit);
// // Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
// // Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
