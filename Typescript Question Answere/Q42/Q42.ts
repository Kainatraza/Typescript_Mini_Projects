//Q42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
}

let magicianNames: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

let greatMagicians: string[] = makeGreat(magicianNames);

showMagicians(greatMagicians);