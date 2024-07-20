/* working with dates */
// Declare a variable of type date
console.log("--------------------");
console.log("\x1b[36m", "Display Current Date and Time", "\x1b[0m");
console.log("--------------------");
let today = new Date();
console.log("the current date and time is " + today);

// date methods
console.log("--------------------");
console.log("\x1b[36m", "Using Date methods", "\x1b[0m");
console.log("--------------------");
console.log("Todays Date is " + today.getDate());
console.log("Todays Day is " + today.getDay());
console.log("Todays Month is " + today.getMonth() + 1);
console.log("Todays Year is " + today.getFullYear());

// custom dates
console.log("--------------------");
console.log("\x1b[36m", "Using Custom Dates", "\x1b[0m");
console.log("--------------------");
let dob = new Date(1999, 2);
console.log(dob);
dob = new Date(1999, 2, 5);
console.log(dob);
