const employee = {
  firstName: "David",
  lastName: "Boon",
  age: 45,
  city: "SG",
  greet: function () {
    // this is a keyword referring to the current object
    return `The employee ${this.firstName} ${this.lastName} is ${this.age} years and lives in ${this.city}`;
  },
};

console.log(employee.greet());
