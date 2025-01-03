/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
  const strArray = str.toLowerCase().split("");
  return strArray.filter(x => vowelsArray.includes(x)).length
}

module.exports = countVowels;