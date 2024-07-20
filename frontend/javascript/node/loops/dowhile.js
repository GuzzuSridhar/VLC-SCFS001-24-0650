/* 
    same as the while loop
    the difference between the while and dowhile is that
    the do while is guarenteed to take one iteration minimum while the same is not the case with a while loop
*/

let x = 1;
do {
  console.log(x);
  x++;
} while (x < 11);

console.log("------------------");

x = 11;
do {
  console.log(x);
  x++;
} while (x < 11);
