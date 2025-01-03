/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const onlyCharStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const revStr = onlyCharStr.split("").reverse().join("")
  return onlyCharStr === revStr;
}

module.exports = isPalindrome;
