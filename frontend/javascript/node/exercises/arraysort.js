const names = [
  "Alice Johnson",
  "David Lee",
  "Emily Garcia",
  "Muhammad Khan",
  "Sophia Hernandez",
  "William Brown",
  "Olivia Miller",
  "Benjamin Moore",
  "Chloe Davis",
  "Noah Clark",
];

let swapped;
do {
  swapped = false;
  for (let index = 0; index < names.length; index++) {
    const element = names[index];
    const nextElement = names[index + 1];
    if (element > nextElement) {
      names[index] = nextElement;
      names[index + 1] = element;
      swapped = true;
    }
  }
} while (swapped);
console.log(
  "\x1b[4m \x1b[33m " + "     Case Sensitive Ascending sort      " + "\x1b[0m"
);
console.log("\x1b[32m" + names + "\x1b[0m");

do {
  swapped = false;
  for (let index = 0; index < names.length; index++) {
    const element = names[index];
    const nextElement = names[index + 1];
    if (element < nextElement) {
      names[index] = nextElement;
      names[index + 1] = element;
      swapped = true;
    }
  }
} while (swapped);
console.log(
  "\x1b[4m \x1b[33m " + "     Case Sensitive Descending sort     " + "\x1b[0m"
);
console.log("\x1b[32m" + names + "\x1b[0m");
