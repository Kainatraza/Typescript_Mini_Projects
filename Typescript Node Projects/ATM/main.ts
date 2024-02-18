import inquirer from "inquirer";
interface anstype {
   userID : string,
   userpin : number,
   accounttype : string,
   transactionType : string,
   amount : number 

}
const answer : anstype = await inquirer.prompt([
    {
        type : "input",
        name: "userID",
        message: "kindly entre your ID"
    },   
     {
        type : "number",
        name: "userpin",
        message: "kindly entre your pin"
    },
    {
type: "list",
name: "accounttype",
choices: ["current","saving"],
message: "select your account  type"
    },
{
    type: "list",
    name: "transactionType",
    choices: ["fast cash","withdrawal"],
    message:"select your transaction",
    when(answer){
        return answer.accounttype
    },
},
{
    type: "list",
    name: "amount",
    choices: [1000, 2000, 10000, 20000],
    message:"select your amount",
    when(answer){
        return answer.transactionType == "fast cash"
    },
},
{
    type: "list",
    name: "amount",
    message:"entre your amount",
    when(answer){
        return answer.transactionType == "withdrawal"
    },
}
])
if (answer.userID && answer.userpin){
    const balance = Math.floor(Math.random()*10000000000)
    console.log(balance);
const Enteredamount = answer.amount;
if(balance >= Enteredamount){
 const remaining = balance - Enteredamount
 console.log("your remaining balance is", remaining);
 
}else{
    console.log("insuficient balance");
    
}
}





