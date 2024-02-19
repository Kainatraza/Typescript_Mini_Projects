#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

class Player {
    name : string
    fuel : number = 100
    constructor(name : string){
        this.name = name
    }
    fueldecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelincrease (){
        this.fuel = 100
    }
}

class Opponent {
    name : string
    fuel : number = 100
    constructor(name : string){
        this.name = name
    }
    fueldecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    } 
}

let player = await inquirer.prompt([
    {
        type:"input",
        name: "name",
        message:"please entre your name:"
    }
])
console.log(player.name);
let opponent = await inquirer.prompt([
    {
        type:"list",
        name:"select",
        message:"select your opponent:",
        choices:["Skeleton","Assassin","Zombie"]
    }
])

console.log(opponent.select);

let p1 = new Player (player.name)
let o1 = new Opponent (opponent.select)
do{

    if (opponent.select == "Zombie"){
    
      
       let ask = await inquirer.prompt([
        {
            type:"list",    
            name:"opt",      
            message:"select your opponent:",
            choices:["Attack","Drink portion","Run for your life"],
        }
       ]);
       if(ask.opt == "Attack"){
       let num = Math.floor(Math.random() * 2)
      if (num > 0){
       p1.fueldecrease()
    console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
    console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
    if (p1.fuel <= 0){
        console.log(chalk.bold.red.italic("you loose, better luck next time")); 
        process.exit()
    }

}
if (num <= 0){
  o1.fueldecrease()
  console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
  console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
  if (o1.fuel <= 0){
      console.log(chalk.bold.green.italic("you Win")); 
      process.exit()
  }
}
   
}
    if(ask.opt == "Drink portion"){
   p1.fuelincrease()
     console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`));
     
 }
if(ask.opt == "Run for your life"){
console.log(chalk.bold.red.italic("you loose, better luck next time"));

 
}
    }
    if (opponent.select == "Skeleton"){
    
      
        let ask = await inquirer.prompt([
         {
             type:"list",    
             name:"opt",      
             message:"select your opponent:",
             choices:["Attack","Drink portion","Run for your life"],
         }
        ]);
        if(ask.opt == "Attack"){
        let num = Math.floor(Math.random() * 2)
       if (num > 0){
        p1.fueldecrease()
     console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
     console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
     if (p1.fuel <= 0){
         console.log(chalk.bold.red.italic("you loose, better luck next time")); 
         process.exit()
     }
 
 }
 if (num <= 0){
   o1.fueldecrease()
   console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
   console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
   if (o1.fuel <= 0){
       console.log(chalk.bold.green.italic("you Win")); 
       process.exit()
   }
 }
    
 }
     if(ask.opt == "Drink portion"){
    p1.fuelincrease()
      console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`));
      
  }
 if(ask.opt == "Run for your life"){
 console.log(chalk.bold.red.italic("you loose, better luck next time"));
 
  
 }
     }
     if (opponent.select == "Assassin"){
    
      
        let ask = await inquirer.prompt([
         {
             type:"list",    
             name:"opt",      
             message:"select your opponent:",
             choices:["Attack","Drink portion","Run for your life"],
         }
        ]);
        if(ask.opt == "Attack"){
        let num = Math.floor(Math.random() * 2)
       if (num > 0){
        p1.fueldecrease()
     console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
     console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
     if (p1.fuel <= 0){
         console.log(chalk.bold.red.italic("you loose, better luck next time")); 
         process.exit()
     }
 
 }
 if (num <= 0){
   o1.fueldecrease()
   console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
   console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
   if (o1.fuel <= 0){
       console.log(chalk.bold.green.italic("you Win")); 
       process.exit()
   }
 }
    
 }
     if(ask.opt == "Drink portion"){
    p1.fuelincrease()
      console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`));
      
  }
 if(ask.opt == "Run for your life"){
 console.log(chalk.bold.red.italic("you loose, better luck next time"));
 
  
 }
     }
}
while(true)