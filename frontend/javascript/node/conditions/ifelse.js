/* three block of a if else statement 
    1. if block (Mandatory)
    2. else if block (optional)
    3. else block (optional)

    syntax
    if(condition){
        statement/s   
    } [else if(condition){
        statement/s 
    }else {
        statements
    }
        ]
*/

let dept = "ADMIN",
  sal;

//   based on the dept value assign different sal value
if (dept.toLowerCase() == "sales") {
  // all string value checks are case sensitive
  sal = 1000;
  console.log(sal);
} else if (dept.toLowerCase() == "admin") {
  sal = 2000;
  console.log(sal);
  //   else is a default condition and will get invoked only in a condition where none of the above conditions are satidfied.
} else {
  console.log("Invalid Dept value");
}

// console.log(sal);
