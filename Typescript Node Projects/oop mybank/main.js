import { faker } from "@faker-js/faker";
import chalk from "chalk/index.js";
import inquirer from "inquirer";
faker;
class Customer {
    constructor(firstName, lastName, age, gender, mobNumber, accNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mobNumber;
        this.accNumber = accNumber;
    }
}
class Bank {
    constructor() {
        this.customer = [];
        this.account = [];
    }
    addCustomer(obj) {
        this.customer.push(obj);
    }
    addAccountNumber(obj) {
        this.account.push(obj);
    }
}
let myBank = new Bank();
for (let i = 1; i <= 3; i++) {
    let fName = faker.person.firstName('male');
    let lName = faker.person.lastName();
    let num = parseInt(faker.phone.number("3##########"));
    const cus = new Customer(fName, lName, 25 * i, "male", num, 1000 + i);
    myBank.addCustomer(cus);
    myBank.addAccountNumber({ accNumber: cus.accNumber, balance: 100 * i });
}
async function bankService(bank) {
    let service = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "please select the service:",
        choices: ["View Balance", "Cash Withdraw", "Cash Deposite"]
    });
    if (service.select == "View Balance") {
        let res = await inquirer.prompt({
            type: "input",
            name: "num",
            message: "please entre your Account Number:",
        });
        let account = myBank.account.find((acc) => acc.accNumber == res.num);
        if (!account) {
            console.log(chalk.red.bold("Invalid Account Number"));
        }
        if (account) {
            let name = myBank.customer.find((item) => item.accNumber == account?.accNumber);
            console.log(`Dear${chalk.green.italic(name?.firstName)}`);
        }
    }
    if (service.select == "Cash Withdraw") {
        console.log("Cash Withdraw");
    }
    if (service.select == "Cash Deposite") {
        console.log("Cash Deposite");
    }
}
bankService(myBank);
