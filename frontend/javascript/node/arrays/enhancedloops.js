// declare an array of Strings
let names = ["Alex", "James", "Sara", "David"];

// enchanced for loops to access the elements in an array

// using for each method
console.log(
  "-----------Access the elements using the For..each Loop------------"
);
// approach 1 (no access to the indexes)
names.forEach((names) => {
  console.log(names);
});
// approach 2 ( access the indexes and the values)
names.forEach((v, i) => {
  console.log(i + " -- " + v);
});

// using for in method (access to index and values)
console.log(
  "-----------Access the elements using the For..in Loop------------"
);
for (const key in names) {
  console.log(names[key] + " - " + key);
}

// using for of method (No access to index)
console.log(
  "-----------Access the elements using the For..of Loop------------"
);
for (const val of names) {
  console.log(val);
}
