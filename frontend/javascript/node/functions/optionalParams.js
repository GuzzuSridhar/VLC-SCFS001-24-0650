//  optional parameters

function prn(x) {
  console.log(x);
}

function optParams(p1 = "default value p1", p2 = "default value p2") {
  prn("Parameter 1 is :" + p1);
  prn("Parameter 2 is :" + p2);
}

optParams(); // not passing any argument , both default values are applied
optParams(10, 20); // passing both arguments
optParams(10); // passing the first argument alone
optParams(undefined, 30); // passing the second argument alone
