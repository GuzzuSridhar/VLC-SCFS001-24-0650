/* Hoisting is the mechanism of referring to variables and functions before being declared
    variables declared with var key word are hoisted, not with let and const
*/

/* var variable is hoisted (the ref to the variable is hoisted but not the actual value) */
console.log(y); // no value (undefined)
var y = 10;

/*  let variable is not hoisted*/
// console.log(x);
// let x = 10;

/*  const variable is not hoisted*/
// console.log(z);
// let z = 10;

// functions are hoisted (function declarations are hoisted and not the function expressions)
greet();

function greet() {
  console.log("Hello World");
}
