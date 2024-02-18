import inquirer from "inquirer";
 
let convertion = {
  "PKR" :{
    "USD":0.0036,
    "GBP":0.0028,
    "PKR": 0
  },
"USD":{
"PKR":279.65,
"GBP":0.79,
"USD":1
},
"GBP":{
"PKR":353.28,
"USD":1.26,
"GBP":1
}
}

const answer:{
    from : "GBP"|"USD"|"PKR",
    to : "GBP"|"USD"|"PKR",
    amount : number
} = await inquirer.prompt([
    {
        type:"list",
        name: "from",
        choices:["GBP","USD","PKR"],
        message:"select your currency:"
    },
    {
        type:"list",
        name: "to",
        choices:["GBP","USD","PKR"],
        message:"select your convertion currency:"
    },
    {
        type:"number",
        name: "amount",
        message:"entre your currency amount:"
    },
])
const {from,to,amount} =  answer;
if(from && to && amount){
 let result = convertion [from][to]* amount
 console.log(`your convertion from ${from} to ${to} is ${result}`);
 
}else{
    console.log("invalid input");
    
}