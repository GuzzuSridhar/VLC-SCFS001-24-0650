import * as math from "./calc.mjs"; // import all the functions
import { subtract, product } from "./calc.mjs"; // import selected functions
import { subtract as s, product as p } from "./calc.mjs"; // import selected functions with alias

console.log(math.product(5, 5));
console.log(s(10, 20));
console.log(subtract(40, 40));
