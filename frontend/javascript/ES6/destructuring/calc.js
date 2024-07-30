function calc(a, b) {
  return [a + b, a - b, a * b, a / b];
}

// using the array destructuring on the returned array
const [add, sub, prod, div] = calc(10, 40);
console.log(add);
console.log(sub);
console.log(prod);
console.log(div);

// using the alias and  undeclared element
const [sum = "sum", dif, mul, di, mod = "Not Yet done"] = calc(20, 40);
console.log(sum);
console.log(mod);
