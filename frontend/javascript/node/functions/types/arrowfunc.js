//  Arrow Functions
// Functional programming -- introduces in es6

//  arrow function with only return statement
let add = (x, y) => x + y;
console.log(add(10, 20));
let res = add(108, 230);
console.log(res);

// anonymous arrow function with String argument and no return value
let up = (str) => console.log(str.toUpperCase());
up("lower");

// annonymous arrow function without arg and no return value
let sayHello = () => console.log("Hello Js..!");
sayHello();

//  arrow function with multiple statements
let calculate = (a, b) => {
  let res = 0;
  res = a + b;
  return res;
};
console.log(calculate(10, 45));
