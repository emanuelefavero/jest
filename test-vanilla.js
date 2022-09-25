// This is how you would write a test in vanilla javascript
// It is NOT Jest, but it is a test
const sum = require('./sum')

function testSum() {
  if (sum(1, 2) === 3) {
    console.log('Test passed')
  } else {
    console.log('Test failed')
  }
}

testSum()
