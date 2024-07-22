/* declaration of arrays */

// String Array

let names = ["Alex", "James", "Sara", "David"];

//  Number Array
let nums = [10, 20, 30, 40, 50, 60];

// Hetrogeneous Array
let hetroarray = [10, "ten", "hello", 78.44, true];

// using the property "length" on an array
// gets the # of elements in an array
console.log("-----------Access the length property------------");
console.log("There are " + names.length + " names in the List");
console.log("There are " + nums.length + " numbers in the List");
console.log("There are " + hetroarray.length + " values in the List");

// Access the elements of the arrays using their index
console.log("-----------Access the elements of Array------------");
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log("-------");
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);
console.log(nums[4]);
console.log(nums[5]);
console.log("-------");
console.log(hetroarray[0]);
console.log(hetroarray[1]);
console.log(hetroarray[2]);
console.log(hetroarray[3]);
console.log(hetroarray[4]);
console.log(hetroarray[5]); // accessin an index that is not present

// Access the values in ana array using their index

// notes
/* 
1. Size of Arrays is not bound.
2. # of elements can be as needed 
3. Arrays in Js are hetrogeneous
*/
