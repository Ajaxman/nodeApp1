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


/* synchronous
const fs = require('fs')
var content

try {
  content = fs.readFile('file.md', 'utf-8')
} catch(ex) {
  console.log(ex)
}

console.log(content)

*/

const fs = require('fs')
console.log('start reading a file...')

fs.readFile('file.md', 'utf-8', function(err, content){
  if(err) {
    console.log('error happened during reading the file')
    return console.log(err);
  }

  console.log(content)
})

console.log('end of the file')
