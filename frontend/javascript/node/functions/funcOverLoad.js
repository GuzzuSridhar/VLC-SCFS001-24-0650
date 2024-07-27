// function over Loading

function pr(s) {
  console.log(s);
}

// function overloading is a function with same name and different number of arguments

function add(n1, n2) {
  pr(n1 + n2);
}

function add(n1, n2, n3) {
  pr(n1 + n2 + n3);
}

//add(10, 20); // not applicable as this functions is replaced with the newer version

function add(...n) {
  // variable arguments (... is called spread operator) representing an array by name n in this case
  let sum = 0;
  for (const i of n) {
    sum += i;
  }
  pr(sum);
}

add(10, 20, 30);
add(10, 20);
add(10, 20, 30, 40);
