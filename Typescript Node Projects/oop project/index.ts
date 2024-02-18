import inquirer from "inquirer"

class Student {
    name : string
    constructor(name:string){
    this.name = name
    }
}

class Person {
    student :Student[] = []
    addstudent(obj:Student){
        this.student.push(obj)
    }
}

const persons = new Person()
console.log(persons);


const programmStart = async(persons:Person)=>{
console.log("Welcome Guest");
const ans= await inquirer.prompt({
   type:"list",
   message:"ap kis bat karna pasand karain ga...",
   name:"select",
   choices:["khud se:self","student"],
});
if(ans.select == "khud se:self"){
console.log("hello mai khud say bat kar raha hun");
console.log("meri tabiyat achi hai.");
}
if(ans.select == "student"){
    const ans = await inquirer.prompt({
        type:"input",
        message:"apko kis student say bat karni hai",
        name:"student",
    });
    const student = persons.student.find((val)=>val.name == ans.student);
    if(!student){
    const name = new Student(ans.student);
    persons.addstudent(name);
    console.log(`hello i am ${name.name}, or mai thik hoon`);
    console.log(persons.student); 
    }
    if(student){
        console.log(`hello i am ${student.name}, or mai thik hoon..............`);
        console.log(persons.student); 
    }
}
};


programmStart(persons);