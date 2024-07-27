const math = require("./singleexport"); // importing the add function as math
const a = require("./singleexport"); // importing the add function as add
console.log(math(10, 20));
console.log(a(10, 20));
