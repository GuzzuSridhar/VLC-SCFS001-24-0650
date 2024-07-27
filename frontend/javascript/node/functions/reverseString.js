function power(n) {
  let res = Math.pow(n, n);
  console.log(res);
}

power(10);

function reverse(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  console.log(revStr);
  return revStr;
}

reverse("String");

function isPalindrome(str) {
  let res = str == reverse(str) ? "is a palindrome" : "is not a palindrome";
  console.log(res);
}

isPalindrome("madam");
