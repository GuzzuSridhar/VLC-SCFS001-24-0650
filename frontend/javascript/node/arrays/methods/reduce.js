let numbers = [1, 22, 3, 4];
/* Reduce Method
    syntax
    ------
    array.reduce(callback[, initialValue])

    Initial Value
        When Initial Value is Provided:
            1.The accumulator starts with the initialValue.
            2. Iteration starts from the first element (index 0).
        
        When Initial Value is Not Provided:
            1. The accumulator starts with the first element of the array.
            2. Iteration starts from the second element (index 1).
*/

/*   Calculate sum of all elements with initial value  */
console.log(
  "\x1b[4m\x1b[33m" +
    "          Calculate sum of all elements with initial value as 0                 " +
    "\x1b[0m"
);
let sum = numbers.reduce((previous, current) => {
  console.log(
    `\x1b[36m${previous} + ${current} = ${previous + current}\x1b[0m`
  );
  return previous + current;
}, 0);
console.log(`\x1b[32m${sum}\x1b[0m`);

/*   Calculate sum of all elements without initial value  */
console.log(
  "\x1b[4m\x1b[33m" +
    "          Calculate sum of all elements with initial value ignored                 " +
    "\x1b[0m"
);
sum = numbers.reduce((previous, current) => {
  console.log(
    `\x1b[36m${previous} + ${current} = ${previous + current}\x1b[0m`
  );
  return previous + current;
});
console.log(`\x1b[32m${sum}\x1b[0m`);

/*   return maximum value   */
let max;
console.log(
  "\x1b[4m\x1b[33m" +
    "          Return the maximum value                 " +
    "\x1b[0m"
);
max = numbers.reduce((p, c) => {
  console.log(`\x1b[36m${p} > ${c} = ${p > c}\x1b[0m`);
  return p > c ? p : c;
});
console.log(`\x1b[32m${max}\x1b[0m`);
