const calc = require('./calc')
const _ = require('lodash')

const numbersToAdd = [
  3,
  4,
  10,
  2
]

const result = calc.sum(numbersToAdd)

const lodashvar1 = _.assign({'a': 1}, {'b':2}, {'c':3});

console.log(`The result is: ${result}`)
console.log(lodashvar1);


/* synchronous */
const fs = require('fs')
var content

try {
  content = fs.readFile('file.md', 'utf-8')
} catch(ex) {
  console.log(ex)
}

console.log(content)

/*
const numbers = [2,4,1,5,4]

function isBiggerThanTwo(num) {
  return num > 2
}

numbers.filter(isBiggerThanTwo)
*/
