/* 
    var - global (function) scope
    let and const - block scope
*/

let globalLet = 100;
{
  let blockVar = 10; // block scoped
  var globalVar = 20;
  console.log(globalLet + " inside the block");
  console.log(blockVar + " inside the block");
  console.log(globalVar + " inside the block");
}
console.log(globalVar + " outside the block");
console.log(globalLet + " outside the block");
// console.log(blockVar +" outside the block"); // not allowed
