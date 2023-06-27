/*
Create a function `countChar` which counts, in a given string, the number of times a character appears.

If the string or the character is null, return -1.
If the character length is other than 1, return -1.

Example:
* "" and "a" -> 0
* "a" and "a" -> 1
* "aaaaabbbaa" and "a" -> 7
* "bbacbaaa" and "c" -> 1
* "bbcc" and "a" -> 0
* null and "a" -> -1

Add you own tests.

*/
const countChar = (string, character) => {
  if (string === null || character === null || character.length !== 1) {
    return -1
  }
  let count = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++
    }
  }
  return count
}

// TODO add your code here
console.log(countChar('aaaaabbbaa', ''))
module.exports = countChar
