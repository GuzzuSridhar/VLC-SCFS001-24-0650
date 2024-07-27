/* non mutating methods  
Method of the array which do not change the state of the array / object
*/

console.log(
  "\x1b[4m\x1b[33m" +
    "               Mutating Methods - that return a new array or other type                 " +
    "\x1b[0m"
);

// join method (joins the elements of the array with a seperator (default is ,))
console.log(
  "\x1b[4m \x1b[33m " + "       Using the join Method       " + "\x1b[0m"
);
console.log("\x1b[32m" + names.join());
console.log(names.join("-"));
console.log(names.join(" ") + "\x1b[0m");

// toString method returning a string
console.log(
  "\x1b[4m\x1b[35m" +
    "           toString method  - returns a string             " +
    "\x1b[0m"
);
console.log("\x1b[36mOriginal Array is " + names);
console.log("Type of the Array is:  " + typeof names + "\x1b[0m");
let returnedValue = names.toString();
console.log("\x1b[32mThe returned value is: " + returnedValue);
console.log("The returned value is a " + typeof returnedValue + "\x1b[0m");

// concat method Combines two or more arrays and returns a new array.
console.log(
  "\x1b[4m\x1b[35m" +
    "          concat method  - Combines two or more arrays and returns a new array.                " +
    "\x1b[0m"
);
let newNames = ["Sara", "Steve", "Mike"];
let allNames = names.concat(newNames);
console.log("\x1b[36mThe first array is: " + names);
console.log("The second array is: " + newNames + "\x1b[0m");
console.log("\x1b[32mThe combined array is: " + allNames);
console.log("The returned value is an " + typeof allNames + "\x1b[0m");

// slice method Returns a copy of a portion of an array into a new array.
console.log(
  "\x1b[4m\x1b[35m" +
    "          slice method  - Returns a copy of a portion of an array into a new array                " +
    "\x1b[0m"
);
console.log("\x1b[36mThe Original array is: " + allNames + "\x1b[0m");
let sliced = allNames.slice(1, 4); // return elements from index 1 to 3 (end index ignored)
console.log("\x1b[32mThe returned array is " + sliced + " --> slice(1, 4)");
sliced = allNames.slice(1, 6); // return elements from index 1 to 5 (end index ignored)
console.log("\x1b[32mThe returned array is " + sliced + " --> slice(1, 6)");
sliced = allNames.slice(3); // return elements from index 3 to last (omitting end )
console.log("\x1b[32mThe returned array is " + sliced + " --> slice(3)");
console.log("The returned value is an " + typeof sliced + "\x1b[0m");

// filter method Returns a new array with all elements that pass the test implemented by the provided function.
console.log(
  "\x1b[4m\x1b[35m" +
    "          filter method  - Returns a new array with all elements that pass the condition in the provided function.                " +
    "\x1b[0m"
);
console.log("\x1b[36mThe Original array is: " + allNames + "\x1b[0m");
let filterArr = allNames.filter((n) => n.length > 4);
console.log(
  "\x1b[32mThe returned array is " + filterArr + " --> names with length > 4"
);
console.log("The returned value is an " + typeof filterArr + "\x1b[0m");

// indexOf method Returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(
  "\x1b[4m\x1b[35m" +
    "          indexOf method  - returns the index of the element that matches the value or -1                 " +
    "\x1b[0m"
);
console.log("\x1b[36mThe Original array is: " + names + "\x1b[0m");
let res = names.indexOf("Dave");
console.log(
  "\x1b[32mThe returned value is " + res + " --> search for name 'dave'"
);
console.log("The returned value is a " + typeof res + "\x1b[0m");

// find method Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
console.log(
  "\x1b[4m\x1b[35m" +
    "          find method  - returns the  element that matches the value or undefined                   " +
    "\x1b[0m"
);
console.log("\x1b[36mThe Original array is: " + names + "\x1b[0m");
res = names.find((n) => n.toLowerCase() == "dave");
console.log(
  "\x1b[32mThe returned value is " + res + " --> search for name 'dave'"
);
console.log("The returned value is a " + typeof res + "\x1b[0m");
