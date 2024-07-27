//  functions with arguments

// simplifying the console.log and shortening the same as prnt
function prnt(str) {
  console.log(str);
}

// rewriting the printTable with an argument
function printTable(n) {
  for (let x = 1; x < 11; x++) {
    prnt(n + " x " + x + " = " + x * n);
  }
}

printTable(55);
printTable(4);
printTable(65);
// printTable("a"); // not a valid type of parameter

//  check the parameter's type before executing the code in the function

function printValidate(n) {
  //   console.log(typeof n);
  if (typeof n == "number") {
    for (let x = 1; x < 11; x++) {
      prnt(n + " x " + x + " = " + x * n);
    }
  } else {
    prnt("Please pass a Number type argument");
  }
}
printValidate(9);
printValidate("a");
