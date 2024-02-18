class School {
    name;
    students = [];
    teachers = [];
    addStudent(stdObj) {
        this.students.push(stdObj);
    }
    addTeacher(teObj) {
        this.teachers.push(teObj);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher extends Student {
}
let school1 = new School("Happy Palace");
let school2 = new School("Karachi Academy");
let school3 = new School("Pakland");
let s1 = new Student("Ahsan", 10, school1.name);
let s2 = new Student("Hamza", 12, school2.name);
let s3 = new Student("Afnan", 18, school3.name);
let t1 = new Teacher("Kiran", 22, school1.name);
let t2 = new Teacher("Hammad", 26, school2.name);
let t3 = new Teacher("Anes", 46, school3.name);
school1.addStudent(s1);
school2.addStudent(s2);
school3.addStudent(s3);
school1.addTeacher(t1);
school2.addTeacher(t2);
school3.addTeacher(t3);
console.log(t1);
console.log(t2);
console.log(t3);
console.log(school1);
console.log(school2);
console.log(school3);
console.log(s1);
console.log(s2);
console.log(s3);
export {};
