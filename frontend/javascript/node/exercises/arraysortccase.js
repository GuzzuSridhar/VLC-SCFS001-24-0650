const names = [
  "Alice Johnson",
  "david Lee",
  "Emily Garcia",
  "Muhammad Khan",
  "Sophia Hernandez",
  "william Brown",
  "Olivia Miller",
  "benjamin Moore",
  "Chloe Davis",
  "Noah Clark",
];

let swapped;
do {
  swapped = false;
  for (let index = 0; index < names.length; index++) {
    if (index + 1 < names.length) {
      const element = names[index].toLowerCase();
      const nextElement = names[index + 1].toLowerCase();
      if (element > nextElement) {
        const temp = names[index];
        names[index] = names[index + 1];
        names[index + 1] = temp;
        swapped = true;
      }
    }
  }
} while (swapped);
console.log(
  "\x1b[4m \x1b[33m " +
    "     Case In-Sensitive Ascending sort      " +
    "\x1b[0m"
);
console.log("\x1b[32m" + names + "\x1b[0m");

do {
  swapped = false;
  for (let index = 0; index < names.length; index++) {
    if (index + 1 < names.length) {
      const element = names[index];
      const nextElement = names[index + 1];
      if (element < nextElement) {
        const temp = names[index];
        names[index] = names[index + 1];
        names[index + 1] = temp;
        swapped = true;
      }
    }
  }
} while (swapped);
console.log(
  "\x1b[4m \x1b[33m " +
    "     Case In-Sensitive Descending sort     " +
    "\x1b[0m"
);
console.log("\x1b[32m" + names + "\x1b[0m");
