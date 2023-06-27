/*
Create a function `convertTime` which converts a time formatted as "hh:mm" in a duration in minuts.

If the argument is not correctly formatted, return null.

* "02:30" -> 150
* "01:45" -> 105
* "01h45m" -> null

Add you own tests.

*/

// TODO add your code here
const convertTime = (time) => {
  const timeArray = time.split(':')
  if (timeArray.length !== 2) {
    return null
  } else {
    const duration = parseInt(timeArray[0]) * 60 + parseInt(timeArray[1])
    return duration
  }
}

console.log(convertTime('2:30'))
module.exports = convertTime
