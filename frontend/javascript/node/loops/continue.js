/*  using break in a loop */

for (let i = 0; i < 11; i++) {
  if (i == 5) continue; // when a continue statement is encountered, the rest of the lines of code in the current iteration is skipped and moves to next iteration
  console.log(i);
}
