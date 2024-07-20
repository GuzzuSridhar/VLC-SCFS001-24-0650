/* 3 ways of declaring strings
    1. using double quotes ""
    2. using the single quotes ''
    3. using the back ticks (template literals)
    strings are textual data
*/

// double quotes
let city = "Singapore";
city = 'this is a "';

// single quotes
let name = "Alex";
name = " this Alex's score ";

// back ticks
let dept = `sales`;

//  string  concatenation (combining strings) using the '+' operator

let firstName = "David";
let lastName = "Boon";
let fullName = firstName + lastName; // string concatenation using the "+" operator

console.log("The full name is : " + fullName);

console.log("The first name is " + firstName + " and last name is " + lastName);
// doing the same with back ticks
console.log(`The first name is ${firstName} and last name is ${lastName}`);

// back ticks preserve white spaces
let wspace = " this is a string in multiple lines"; // cannot span on new line
wspace = ` this 
            is a string in 
            multiple lines`;
console.log(wspace);

// ------------------------------- String Methods -------------------------------------------------------
console.log(
  "------------------------------- String Methods -------------------------------------------------------"
);

// a string is a array of characters
// array is an indexed storage of information (collection)

let myname = "David Boon";
//  getting the length of the myname
console.log("the length of " + myname + " is " + myname.length);

// Accessing the specific characters at a specific index
console.log("--------------------");
console.log("\x1b[36m", "Using the Array Index", "\x1b[0m");
console.log("--------------------");
console.log("The first character is " + myname[0]);
// console.log("The first character is " + myname[3]);
console.log("The last character is " + myname[myname.length - 1]); // ensure the last character is printed

// using the builtin function charAt()
console.log("--------------------");
console.log("\x1b[36m", "Using the charAt()", "\x1b[0m");
console.log("--------------------");
console.log("The first character is " + myname.charAt(0));
// console.log("The last character is " + myname.charAt(3));
console.log("The last character is " + myname.charAt(myname.length - 1)); // ensure the last character is printed

// Other Methods with string
console.log("--------------------");
console.log("\x1b[36m", "Using the other functions", "\x1b[0m");
console.log("--------------------");
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
