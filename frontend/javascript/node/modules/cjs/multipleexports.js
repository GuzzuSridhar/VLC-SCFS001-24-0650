function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };

// alternate way of importing using alias for the functions
module.exports.x = add;
module.exports.y = subtract;
