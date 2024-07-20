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
let fullName = firstName + lastName;

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
