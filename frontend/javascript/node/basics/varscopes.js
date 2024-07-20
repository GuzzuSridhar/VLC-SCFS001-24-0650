/* 
    var - global (function) scope
    let and const - block scope
*/

let globalLet = 100; // global scopped
{
  let blockVar = 10; // block scopped
  var globalVar = 20; // global scopped
  console.log(globalLet + " inside the block");
  console.log(blockVar + " inside the block");
  console.log(globalVar + " inside the block");
}
console.log(globalVar + " outside the block");
console.log(globalLet + " outside the block");
// console.log(blockVar +" outside the block"); // not allowed
