function People(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.updateAge = () => ++this.age;
}

//  creating people list
let employees = [];
employees.push(new People("Alex", 25, "KL")); //this keyword is replaced by employees[0]
employees.push(new People("Alice", 45, "NY")); //this keyword is replaced by employees[1]
employees.push(new People("Joe", 65, "SG")); //this keyword is replaced by employees[2]

// printing the people list

for (let i = 0; i < employees.length; i++) {
  console.log(
    employees[i].name +
      " is " +
      employees[i].age +
      " years old, and lives in " +
      employees[i].city
  );
}
