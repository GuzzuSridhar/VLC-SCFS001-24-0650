// function with multiple arguments

function prnt(str) {
  console.log(str);
}

function add(n1, n2) {
  prnt(n1 + n2);
}
function subtract(n1, n2) {
  prnt(n1 - n2);
}
function multiply(n1, n2) {
  prnt(n1 * n2);
}
function divide(n1, n2) {
  prnt(n1 / n2);
}

add(10, 20);
add("Hello ", "World");
subtract(10, 20);
multiply(10, 3);
divide(10, 2);
