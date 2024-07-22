// declare an array of Strings
let names = ["Alex", "James", "Sara", "David"];

//  Applying loops to iterate thru the arrays

// using the for loop
console.log("-----------Access the elements using the For Loop------------");
for (let index = 0; index < names.length; index++) {
  console.log(names[index]);
}

// using the while loop
console.log("-----------Access the elements using the while Loop------------");
let loopVar = 0;
while (loopVar < names.length) {
  console.log(names[loopVar]);
  loopVar++;
}

// using the do while loop
console.log(
  "-----------Access the elements using the do while Loop------------"
);
loopVar = 0;
do {
  console.log(names[loopVar]);
  loopVar++;
} while (loopVar < names.length);
