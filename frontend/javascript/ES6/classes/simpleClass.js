// support for Classes in js started in the the version ES6

class Student {
  name = "Joe";
  age = 17;
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const stud = new Student();
const stud1 = new Student();
stud.greet();
stud1.greet();
