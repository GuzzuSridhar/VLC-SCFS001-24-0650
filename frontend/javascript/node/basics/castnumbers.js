/* Cassting strings to numbers */

let age = "10";
console.log(typeof age); // string
let res = age + 10; // the age is considered to be a String and hence performs concat operation
console.log(typeof res); // string

res = parseInt(age) + 10; // casting the string to number
console.log(typeof res); // number
console.log(res);

//  other casting samples

let sal = "100.25";
console.log(parseInt(sal));
console.log(parseFloat(sal));

/* Converting numbers to String */
let num = 10;
//  using the toString method to convert number to string
let temp = num.toString(); //  '10' as decimal string
console.log(temp);
console.log(typeof temp);

temp = num.toString(2); // '1010' binary string
console.log(temp);
console.log(typeof temp);

temp = num.toString(8); // '12' octal string
console.log(temp);
console.log(typeof temp);

temp = num.toString(16); // 'a' hex string
console.log(temp);
console.log(typeof temp);
