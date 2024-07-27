/* Array Methods */

/* Mutating methods 
    Method of the array which change the state of the array / object

*/
// declare an array of Strings
let names = ["Alex", "James", "Sara", "David"];

// push method (Adds an element to the end of the existing list)
console.log(
  "\x1b[4m \x1b[33m " + "       Using the push Method       " + "\x1b[0m"
);
console.log("The original Array is " + names);
let change = names.push("John"); // returns the new length of the array after push
console.log(
  "\x1b[32mThe changed Array is: " +
    names +
    ".  John was added at the end and the current count of elements is " +
    change +
    "\x1b[0m"
);

// unshift method (Adds an element to the start of the existing list)
console.log(
  "\x1b[4m \x1b[33m " + "       Using the unshift Method        " + "\x1b[0m"
);
console.log("The original Array is " + names);
change = names.unshift("Jim"); // returns the new length of the array after unshift
console.log(
  "\x1b[32mThe changed Array is: " +
    names +
    ". Jim  was added at the start and the current count of elements is " +
    change +
    "\x1b[0m"
);

// shift method (removes the first element from the list and returns the element)
console.log(
  "\x1b[4m \x1b[33m " + "      Using the shift Method       " + "\x1b[0m"
);
console.log("The original Array is " + names);
change = names.shift(); // returns the removed element
console.log(change + " has been removed from the start in the list");
console.log("\x1b[32mChanged Array is " + names + "\x1b[0m");

// pop method (removes the last element from the list and returns the element)
console.log(
  "\x1b[4m \x1b[33m " + "       Using the pop Method        " + "\x1b[0m"
);
console.log("Original Array is " + names);
change = names.pop();
console.log(change + " has been removed from end in the list");
console.log("\x1b[32m" + "Changed Array is " + names + "\x1b[0m");

// reverse method (reverses the list of elements in the list)
console.log(
  "\x1b[4m \x1b[33m " + "       Using the reverse Method        " + "\x1b[0m"
);
console.log("array before reverse is " + names);
names.reverse();
console.log("\x1b[32m" + "array after reverse is " + names + "\x1b[0m");

// sort method (sorts the elements in the list)

/* Notes
  used to sort elements of an array in place
  sorts elements as Strings in lexicographic order and not alphabetical
  the lexicographic means treating alphabets, numbers as Strings
*/

console.log(
  "\x1b[4m \x1b[33m " + "       Using the sort Method       " + "\x1b[0m"
);
console.log("--------Strings-----");
console.log("array before sort is " + names);
names.sort(); // default order is ascending
console.log("\x1b[32m" + "array after ascending sort is " + names);
names.reverse(); // applies descending order
console.log("array after descending sort is " + names + "\x1b[0m");

// sort with Numbers
console.log("--------Numbers-----");
let nums = [10, 5, 20];
console.log("array before sort is " + nums);
nums.sort(); // not sorted in an expected order as the numbers are treated as unicode characters
console.log(
  "\x1b[31m" + "array after default number sort is " + nums + "\x1b[0m"
);

// correct way of sorting is to use the compare function
nums.sort((x, y) => x - y); //// sorted in an ascending order as the numbers are not treated as unicode characters
console.log("\x1b[32m" + "array after proper ascending number sort is " + nums);
nums.sort((x, y) => y - x); //// sorted in an descending order as the numbers are not treated as unicode characters
console.log("array after proper descending number sort is " + nums + "\x1b[0m");
