/*
A palindrome is a word or a phrase that reads the same backwards as forwards, example. madam.

Create a function `isPalindrome` that returns if a word is a palindrome.

This function must not be case sensitive.

If the word is null or empty, return true.

Example:
* "rotor" -> true
* "tacos" -> false
* "Kayak" -> true
* null -> true

Add you own tests.
*/
const isPalindrome = (word) => {
  if (
    word === null ||
    word.length === 0 ||
    word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
  ) {
    return true
  } else {
    return false
  }
}
// DuSale's been here and flew away
// TODO add your code here
console.log(isPalindrome('Kayaka'))
module.exports = isPalindrome
