import inquirer from "inquirer";
let todos : string [] = []
let loop = true

while(loop){
const answer:{
    TODO:string,
    addmore : boolean
} = await inquirer.prompt([
    {
        type:"input",
        name : "TODO",
        message:"what do you want to add in your TODO"
    },
    {
        type:"confirm",
        name:"addmore",
        message: "do you want to add more TODO",
        default: false
    }
])
const {TODO,addmore} = answer
console.log(answer);

loop= addmore
if(TODO){
todos.push(TODO)
}else{
    console.log("kindliy add invalid input");
    
}
}
console.log(todos);

if (todos.length>0){
    console.log("your todos list : \n");
    todos.forEach ( todo =>{
        console.log(todo);
        
    }) ;   
}else{
    console.log("no todos found");
    
}


