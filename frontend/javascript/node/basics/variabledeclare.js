// declare a String type of Variable
let name = "Alex";
// declare a Number type of Variable
let age = 45;
// declare a Boolean type of Variable
let isMale = true;
// declare a Array type of Variable
let nums = [1, 2, 3, 4, 5];
// declare undefined variable
let undefine;
// declare object type
let emp = { name: "Alex", sal: 5000 };
// declare function type
let calcAvg = function () {};
// declare a null value variable
let temp = null;
// declare a date variable
let today = new Date();

/* the data type is inferred at run time based on the value assigned
    use the typeof function to get the type of a variable
*/

console.log(typeof name); // output string
console.log(typeof age); // output number
console.log(typeof isMale); // output boolean
console.log(typeof nums); // output object
console.log(typeof undefine); // output undefined
console.log(typeof emp); // output object
console.log(typeof calcAvg); // output function
console.log(typeof temp); // output object
console.log(typeof today); // output
