/* 
    Arithmetic operators
    1. Add
    2. Subtract
    3. Multiply
    4. Division
    5. Modulo
    6. increment (Post and pre)
    7. decrement (Post and pre)
*/

let n1 = 10,
  n2 = 20,
  res;

// add operator
res = n1 + n2;
console.log(res);

// subtract operator
res = n1 - n2;
console.log(res);

// multiply operator
res = n1 * n2;
console.log(res);

// divide operator
res = n1 / n2;
console.log(res);

// Modulo operator
res = n1 % n2;
console.log(res);

console.log("--------------");
// Increment post
res = n1++;
console.log(res); // 10
console.log(n1); //11

// Increment pre
res = ++n1;
console.log(res); // 12

console.log("--------------");
// decrement post
res = n1--;
console.log(res); // 12
console.log(n1); // 11

// decrement pre
res = --n1;
console.log(res); // 10
