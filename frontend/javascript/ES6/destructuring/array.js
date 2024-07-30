const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const names = ["Alex", "Dave", "Jim", "Jane"];

// traditional way of accessing the elements
let a = names[0];
let b = nums[0];

//Using the array destructuring to access the first 2 elements
const [first, second] = names;
console.log(first);
console.log(second);

//Using the array destructuring to access the first 2 elements
const [x, y] = nums;
console.log(x);
console.log(y);

//Using the array destructuring to access the 2 element only

const [, f] = nums; // 2
console.log(f + " f");

// using the spread operator to access the rest of elements
const [j, k, ...z] = nums;
console.log(j);
console.log(k);
console.log(z); //
