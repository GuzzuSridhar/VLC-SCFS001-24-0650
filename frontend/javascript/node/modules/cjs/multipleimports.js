const math = require("./multipleexports");
const a = require("./singleexport"); // importing the add function as add
console.log(math.add(10, 20));
console.log(math.subtract(10, 20));
console.log(a(10, 20));
