/* for loop 
simple to use
all the 3 aspects of a loop are in a single statement
*/

for (let i = 1; i < 11; i++) {
  console.log(i);
}

let res = "";
for (let i = 1; i < 11; i++) {
  res += i + " ";
}

console.log(res);

// if res is a number
res = 0;
for (let i = 1; i < 11; i++) {
  if (i == 1) {
    res = 1 + " ";
  } else res += i + " ";
}
console.log(res);
