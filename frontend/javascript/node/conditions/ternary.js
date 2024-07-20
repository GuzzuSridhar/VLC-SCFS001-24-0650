/* 
    ternary operator is a replace ment / shortcut for the if-else statemnt
    can handle only one condition (no else if accepted)
    syntax
    (condition) ? what to do if true : what to do if false
*/
// if else
let age = 15,
  stat;
if (age >= 18) stat = "Adult";
else {
  stat = "Minor";
}

console.log(stat);

// convert the code above to a ternary operator
stat = age >= 18 ? "Adult" : "Minor";
console.log(stat);

// ignore the assignmnet and directly print
console.log(age >= 18 ? "Adult" : "Minor");
