"use strict";
//Q42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    return magicians.map(magician => `${magician} the Great`);
}
let magicianNames = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
let greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians);
