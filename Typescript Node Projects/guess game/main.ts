#!/usr/bin/env node

import inquirer from "inquirer";  
type anstype = {
    userGuess : number
}

const systemgeneratedno = Math.floor(Math.random()*10)

const answer : anstype =  await inquirer.prompt([
    {
        type : "number",
        name : "userGuess",
        message : "write your guess between 1 to 11"
    }
])
const {userGuess} = answer;
console.log ("User Guess Number:",userGuess,"\n","System Guess Number", systemgeneratedno ,)
if (userGuess === systemgeneratedno){
    console.log("yeh your answer is correct congratulations you win!")
}else {
    console.log("ohh you lost better luck next time!")
}



