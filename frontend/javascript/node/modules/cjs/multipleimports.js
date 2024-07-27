const math = require("./multipleexports");
const a = require("./singleexport"); //importing from a different file
// console.log(math.add(10, 20));
// console.log(math.subtract(10, 20));
console.log(math.x(10, 20));
console.log(math.y(10, 20));

console.log(a(10, 20));
