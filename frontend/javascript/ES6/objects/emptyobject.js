let person = new Object(); // empty object

person.name = "Alice";
person.age = 30;
person.city = "KL";

person.updateAge = () => ++person.age;
person.greet = () => "welcome " + person.name;

console.log(person.age);
console.log(person.updateAge());

console.log(person.greet());
