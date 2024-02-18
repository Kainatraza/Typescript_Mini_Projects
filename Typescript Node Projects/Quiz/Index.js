import inquirer from "inquirer";
async function AskQuestion() {
    const answers = await inquirer.prompt([{
            type: "list",
            name: "Questionno1",
            choices: ["Amazon", "Microsoft", "Oracle", "Typescript"],
            message: "Which of the following companies has developed typescript?"
        },
        {
            type: "list",
            name: "Questionno2",
            choices: ["Gradual", "Duck", "Dynamic", "All of the Above"],
            message: "What is the typing principles of typescript?"
        },
        {
            type: "list",
            name: "Questionno3",
            choices: [".tt", ".tsx", ".node", ".ts"],
            message: "Which of the following files names is the extension for typescript?"
        },
        {
            type: "list",
            name: "Questionno4",
            choices: ["Javascript", "C#", "Java", "All of the above"],
            message: "Which of the computer programming language below has influenced the creation of typescript?"
        },
    ]);
    const marks = 10;
    const fail = 0;
    if (answers.Questionno1 === "Microsoft") {
        console.log("Answer is correct");
    }
    else
        () => {
            console.log("Answer is not correct");
        };
    if (answers.Questionno2 === "Dynamic") {
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is not correct");
    }
    if (answers.Questionno3 === ".ts") {
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is not correct");
    }
    if (answers.Questionno4 === "Javascript") {
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is not correct");
    }
}
AskQuestion();
