// export multiple functions

/*Multiple exports
using the export keyword in the function declaration 
  export function subtract(a, b) {
*/

export function subtract(a, b) {
  return a - b;
}
export function product(a, b) {
  return a * b;
}
export function division(a, b) {
  return a / b;
}

/* alternatively */
// named exports
// export { subtract, product, division };
