// arrow functions

// with 2 parameters return value
let add = (a, b) => a + b;
console.log(add(10, 20));
// with 1 parameters return value
let ad = (a) => a + a;
console.log(ad(10));

// with no return and no argument
let greet = () => console.log("hello");
greet();
// with no return and an argument
let ucase = (str) => console.log(str.toUpperCase());
ucase("hello");

let calc = (a, b) => {
  let res = 0;
  res = a + b;
  return res;
};
