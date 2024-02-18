import inquirer from "inquirer";
const answer :{
    numberOne : number ,
    numberTwo : number ,
    operator : string 
} =  await inquirer.prompt ([
    {
        type : "number",
        name : "numberOne",
        message : "kindly entre your first number",
    },
    {
        type : "number",
        name : "numberTwo",
        message : "kindly entre your second number"
    },
    {
        type : "list",
        name : "operator",
        message : "select  Operator :",
        choices : ["+","-","/","*"]
    },
    
]);
const {numberOne , numberTwo , operator} = answer;
if (numberOne && numberTwo && operator){ 
let result : number = 0 ;
  if(operator === "+"){
    result = numberOne + numberTwo
} else if (operator === "-"){
    result = numberOne - numberTwo
}  if (operator === "/"){
    result = numberOne / numberTwo
}  if (operator === "*"){
    result = numberOne * numberTwo
}
    console.log("your result is:", result)

}    
 else {
    console.log("Kindly entre valid input");
}







