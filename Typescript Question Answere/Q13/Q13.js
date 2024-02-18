"use strict";
//Q13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favoritetransports = ["Honda motorcycle", "Toyata rushcar", "Haval", "Proton"];
let message = "I would really like a";
console.log(message, favoritetransports[0]);
console.log(message, favoritetransports[1]);
favoritetransports.map((items) => console.log(`I would really like a"${items}`));
