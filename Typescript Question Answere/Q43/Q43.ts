//Q43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
}

let magicianNames: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Call the makeGreat function with a copy of the array to keep the original unchanged
let greatMagicians: string[] = makeGreat([...magicianNames]);

// Call showMagicians with each array to show the original and modified arrays
console.log("Original Magicians:");
showMagicians(magicianNames);

console.log("\nGreat Magicians:");
showMagicians(greatMagicians);