 //Q21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

 interface Person {
    name: string;
    age: number;
    occupation: string;
  }
  
  // Create objects with the specified structure
  let person1: Person = {
    name: "Nadia",
    age: 35,
    occupation: "Engineer"
  };
  
  let person2: Person = {
    name: "Sadia",
    age: 26,
    occupation: "Web developer"
  };
  
  // Accessing object properties
  console.log(person1); // Output: John Doe
  console.log(person2);