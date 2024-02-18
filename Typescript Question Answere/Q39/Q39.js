"use strict";
// Q39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
let location1 = cityCountry('Lahore', 'Pakistan');
let location2 = cityCountry('Paris', 'France');
let location3 = cityCountry('New York', 'USA');
console.log(location1);
console.log(location2);
console.log(location3);
