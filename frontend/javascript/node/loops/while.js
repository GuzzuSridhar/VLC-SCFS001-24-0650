/* While loop 
    the loop variable is not part of the loop declaration
    and so is not the increment / decrement of the same
*/

let i = 1; // declare the loop variable
while (i < 11) {
  // while loop declaration with the exit condition
  console.log(i);
  i++; // incrementing the loop variable
}

// print vertical
i = 1;
let res = "";
while (i < 11) {
  res += i + " ";
  i++;
}
console.log(res);
