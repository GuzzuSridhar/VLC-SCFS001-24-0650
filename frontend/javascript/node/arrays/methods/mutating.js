/* Array Methods */

/* Mutating methods 
    Method of the array which change the state of the array / object

*/
// declare an array of Strings
let names = ["Alex", "James", "Sara", "David"];

// push method (Adds an element to the end of the existing list)
console.log("-----------Using the push Method------------");
console.log("The original Array is " + names);
let change = names.push("John"); // returns the new length of the array after push
console.log(
  "The changed Array is: " +
    names +
    ".  John was added at the end and the current list is of " +
    change +
    " elements"
);

// unshift method (Adds an element to the start of the existing list)
console.log("-----------Using the unshift Method------------");
console.log("The original Array is " + names);
change = names.unshift("Jim"); // returns the new length of the array after unshift
console.log(
  "The changed Array is: " +
    names +
    ". Jim  was added at the start and the current list is of " +
    change +
    " elements"
);
