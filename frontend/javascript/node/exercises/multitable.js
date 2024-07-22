/* print a multiplication table */

console.log("-------using the for loop-------------------");
// using For loop
for (let x = 1; x < 11; x++) {
  console.log("5 x " + x + " = " + 5 * x);
}

console.log("-------using the while loop-------------------");
// using the while loop
let x = 1;
while (x < 11) {
  console.log("5 x " + x + " = " + 5 * x);
  x++;
}

console.log("-------using the do while loop-------------------");
// using the while loop
x = 1;
do {
  console.log("5 x " + x + " = " + 5 * x);
  x++;
} while (x < 11);
