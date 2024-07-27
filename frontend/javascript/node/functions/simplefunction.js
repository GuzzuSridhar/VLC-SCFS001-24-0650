// a function is a set of js statements
// not invoked implecitly
// write once call anywhere
function greet() {
  console.log("Hello World");
  console.log("Hello World again");
  console.log("Hello World again and again");
}

function printTab() {
  for (let i = 0; i < 11; i++) {
    console.log("10 x " + i + " = " + 10 * i);
  }
}

// call a function
greet();
printTab();
