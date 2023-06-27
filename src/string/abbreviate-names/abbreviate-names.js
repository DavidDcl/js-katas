/*
Create a function `abbreviate` which converts a name into initials.

The output should be capital letters with a dot separating them.

Example:
* "Alyson Hannigan" -> "A.H"
* "Cobie Smulders" -> "C.S"
* "Neil Patrick Harris" -> "N.P.H"

Add you own tests.

*/

// TODO add your code here
const abbreviate = (name) => {
  const fullName = name.split(' ')
  const result = []
  for (let i = 0; i < fullName.length; i++) {
    result.push(fullName[i].charAt(0).toUpperCase())
  }
  return result.join('.')
}

console.log(abbreviate('daVid sam tristan marvin'))

module.exports = abbreviate
