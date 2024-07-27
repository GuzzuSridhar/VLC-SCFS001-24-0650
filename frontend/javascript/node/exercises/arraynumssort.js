let nums = [22, 2, 4, 6, 16, 8, 10, 24];

for (let index = 0; index < nums.length; index++) {
  let x = nums[index];
  let y = nums[index + 1];
  //   console.log(
  //     "index = " +
  //       index +
  //       " index[+1] = " +
  //       (index + 1) +
  //       " x = " +
  //       x +
  //       " y = " +
  //       y
  //   );
  if (x > y) {
    nums[index] = y;
    nums[index + 1] = x;
    // console.log(
    //   "\n" +
    //     " nums[" +
    //     index +
    //     "] =" +
    //     nums[index] +
    //     " nums[" +
    //     (index + 1) +
    //     "] = " +
    //     nums[index + 1]
    // );
  } // 1>20
}
console.log(nums);
console.log(nums.reverse());
