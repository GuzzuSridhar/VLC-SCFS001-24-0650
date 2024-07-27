// IIFE
// Immediately Invoked function
// one time use only
//  cannot be reused

// using the () towards the end of the function
(function () {
  console.log("Simple annonymous function");
})();

// using the .call method towards the end of the function
(function () {
  console.log("Simple annonymous function");
}).call();

// using the .apply method towards the end of the function
(function () {
  console.log("Simple annonymous function");
}).apply();

// IIFE with an arrow function
(() => console.log("IIFE with Arrow"))();
