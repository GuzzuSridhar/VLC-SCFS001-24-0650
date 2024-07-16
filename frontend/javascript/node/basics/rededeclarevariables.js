// redeclaring variables

let age = 10; // let types cannot be redeclared
// let age =20; // not possible and compile error

const increment = 10; //const types cannot be redeclared
// const increment = 20; // not possible and compile error

/* discouraged declarations (var and implicit)
    still regarded for backward compatinility
*/

var sal = 1000; // var types can be redeclared
var sal = 2000; // var types can be redeclared

dept = "sales"; // implicit types can be redeclared
dept = "mktg;"; // // implicit types can be redeclared
