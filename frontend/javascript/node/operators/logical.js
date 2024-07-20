/* Logical Operators */
// used to combine multiple comparison operations (grouping of conditions)
// always result in a boolean output
/* 
    1. logical and
    2. logical or
    3. logical NOT
*/

let sal = 9899,
  comm = 500;
let role = "manager";
let res;

// AND Operator "&&"
console.log("--------------AND Operator---------------");
res = sal > 5000 && comm > 0;
console.log(res); // true
res = sal > 5000 && role.toLowerCase() != "manager";
console.log(res); // false

/* truth table for AND 
    C1  C2   RES
    T   T     T
    T   F     F
    F   T     F
    F   F     F
*/

// OR Operator "||"
console.log("--------------OR Operator---------------");
res = sal > 5000 || comm > 0;
console.log(res); // true
res = sal > 5000 || role.toLowerCase() != "manager";
console.log(res); // true

/* truth table for AND 
    C1  C2   RES
    T   T     T
    T   F     T
    F   T     T
    F   F     F
*/

// NOT Operator "!"
console.log("--------------NOT Operator---------------");
res = !(sal > 5000 || comm > 0);
console.log(res); // false
res = !(sal > 5000 || role.toLowerCase() != "manager");
console.log(res); // false

let isGood = true;
console.log(!isGood); // false
