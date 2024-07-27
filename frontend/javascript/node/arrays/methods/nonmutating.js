/* non mutating methods  
Method of the array which do not change the state of the array / object
*/

// join method (joins the elements of the array with a seperator (default is ,))
console.log(
  "\x1b[4m \x1b[33m " + "       Using the join Method       " + "\x1b[0m"
);
console.log("\x1b[32m" + names.join());
console.log(names.join("-"));
console.log(names.join(" ") + "\x1b[0m");
