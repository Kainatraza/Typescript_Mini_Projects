import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "entre your sentence to count the word"
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(`you sentence word count is ${words.length}`);
