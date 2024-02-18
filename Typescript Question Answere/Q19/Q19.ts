 //Q19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

 let guestList: string[] = ["Albert Einstein", "Ada Lovelace", "Leonardo da Vinci"];

 // Print a message inviting each person to dinner.
 guestList.forEach(person => {
     console.log(`Dear ${person}, you are invited to dinner!`);
 });
 
 // Q18 Seeing the World
 let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Marrakech", "Sydney"];
 
 // Print the number of people you are inviting to dinner.
 console.log(`Number of people invited to dinner: ${guestList.length}`);
 
 // Print your array in its original order.
 console.log("Original Order:", placesToVisit);
 
 // Print your array in alphabetical order without modifying the actual list.
 let alphabeticalOrder = [...placesToVisit].sort();
 console.log("Alphabetical Order:", alphabeticalOrder);
 
 // Show that your array is still in its original order by printing it.
 console.log("Original Order (still):", placesToVisit);
 
 // Print your array in reverse alphabetical order without changing the order of the original list.
 let reverseAlphabeticalOrder = [...placesToVisit].sort((a, b) => b.localeCompare(a));
 console.log("Reverse Alphabetical Order:", reverseAlphabeticalOrder);
 
 // Show that your array is still in its original order by printing it again.
 console.log("Original Order (still):", placesToVisit);
 
 // Reverse the order of your list. Print the array to show that its order has changed.
 placesToVisit.reverse();
 console.log("Reversed Order:", placesToVisit);
 
 // Reverse the order of your list again. Print the list to show it’s back to its original order.
 placesToVisit.reverse();
 console.log("Original Order (after reversing again):", placesToVisit);
 
 // Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
 placesToVisit.sort();
 console.log("Sorted in Alphabetical Order:", placesToVisit);
 
 // Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
 placesToVisit.sort((a, b) => b.localeCompare(a));
 console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);






