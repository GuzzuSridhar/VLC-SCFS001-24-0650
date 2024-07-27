//  returning values from functions

// return will be the last statement executed inside a function if present

function add(n1, n2) {
  return n1 + n2;
  //   console.log("")  -- unreachable code as it is after the return statement
}

add(10, 33); // the returned value is not consumed and no out put from this line
// console.log(add(10, 20));  / the returned value is passed to console.log
let res = add(100, 898); // the returned value is passed to the variable called res
console.log(res);

res = add(add(10, 20), add(1989, 897));
console.log(res);
