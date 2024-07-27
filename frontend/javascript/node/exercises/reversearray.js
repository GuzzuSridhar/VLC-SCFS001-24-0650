let names = ["Alex", "James", "Sara", "David"];
let rev = [];

names.forEach((element) => {
  console.log(element);
});

console.log("-------------");
// print the reverse of the array

for (let index = names.length - 1; index >= 0; index--) {
  rev.push(names[index]);
  //   console.log(names[index]);
}
console.log(rev);
