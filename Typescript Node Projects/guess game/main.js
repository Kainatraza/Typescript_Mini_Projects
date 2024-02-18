import inquirer from "inquirer";
const systemgeneratedno = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "write your guess b\w 1 to 11"
    }
]);
const { userGuess } = answer;
console.log(userGuess, "userGuess", systemgeneratedno, "sys");
if (userGuess === systemgeneratedno) {
    console.log("yeh your answer is correct congratulations you win!");
}
else {
    console.log("ohh you lost better luck next time!");
}
