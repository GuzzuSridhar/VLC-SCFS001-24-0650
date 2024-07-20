/* Comparison operators */

// always result in a boolean value (true or false)
/* 
    1. equal (equality)
    2. not equal (non equality)
    3. greater than
    4. less than
    5. greater than equals
    6. less than equals
*/

let res;
// equality "=="
console.log("--------------Equality---------------");
res = 5 == 5;
console.log(res); // true
res = 5 == 6;
console.log(res); // false

// equality with type
console.log("--------------Equality with types---------------");
res = "5" == 5; // "==" does not include type check
console.log(res); // true
res = "5" === 5; // "===" includes type check
console.log(res); // false

console.log("--------------Non Equality---------------");
// noequality "=="
res = 5 != 5;
console.log(res); // false
res = 5 != 6;
console.log(res); // true

console.log("--------------Greater than---------------");
// greater than ">"
res = 5 > 5;
console.log(res); // false
res = 6 > 5;
console.log(res); // true

console.log("--------------Greater than equals---------------");
// greater than equals ">="
res = 5 >= 5;
console.log(res); // true
res = 6 >= 5;
console.log(res); // true

console.log("--------------Less than---------------");
// less than "<"
res = 5 < 5;
console.log(res); // false
res = 6 < 7;
console.log(res); // true

console.log("--------------Less than equals---------------");
// less than equals "<="
res = 5 <= 5;
console.log(res); // true
res = 5 <= 6;
console.log(res); // true
