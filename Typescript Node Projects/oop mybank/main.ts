import { faker } from "@faker-js/faker"
import chalk from "chalk/index.js"
import inquirer from "inquirer"

faker

class Customer{
    firstName: string
    lastName:string
    age:number
    gender:string
    mobNumber:number
    accNumber:number

    constructor(firstName:string,lastName:string,age:number,gender:string,mobNumber:number,accNumber:number){
        this.firstName = firstName
        this.lastName =lastName
        this.age = age
        this.gender = gender
        this.mobNumber = mobNumber
        this.accNumber = accNumber
    }
}

interface BankAccount{
    accNumber:number,
    balance:number,
}

class Bank{
    customer : Customer[]=[]
    account : BankAccount[]=[]

    addCustomer(obj:Customer){
        this.customer.push(obj)
    }

    addAccountNumber(obj:BankAccount){
        this.account.push(obj)
    }
}

let myBank = new Bank();

for(let i:number=1;i<=3;i++){
    let fName = faker.person.firstName('male')
    let lName = faker.person.lastName()
    let num = parseInt(faker.phone.number("3##########"))
    const cus = new Customer(fName,lName,25*i,"male",num,1000+i)
    myBank.addCustomer(cus)
    myBank.addAccountNumber({accNumber:cus.accNumber,balance:100*i})   
}
async function bankService(bank:Bank){
    let service = await inquirer.prompt({
        type:"list",
        name:"select",
        message:"please select the service:",
        choices:["View Balance","Cash Withdraw","Cash Deposite"]
    })
    if(service.select == "View Balance"){
      let res = await inquirer.prompt({
        type:"input",
        name:"num",
        message:"please entre your Account Number:",
      });
      let account = myBank.account.find((acc)=>acc.accNumber == res.num)  
      if(!account){
        console.log(chalk.red.bold("Invalid Account Number"));      
      }   
      if(account){
        let name = myBank.customer.find(
            (item)=>item.accNumber == account?.accNumber
        )
        console.log(`Dear${chalk.green.italic(name?.firstName)}`);
        
      }
    }
    if(service.select == "Cash Withdraw"){
        console.log("Cash Withdraw");        
    }
    if(service.select == "Cash Deposite"){
        console.log("Cash Deposite");        
    }
}
bankService(myBank)


