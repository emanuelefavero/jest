const cloneArray = require('./cloneArray')

test('clones an array', () => {
  const array = [1, 2, 3]
  // BEWARE: when the function output is expected to be equal to the input,
  // use toEqual instead of toBe
  expect(cloneArray(array)).toEqual(array)
  // You can call and chain multiple methods
  // be sure that the output is NOT the same as the input
  // ** Remember: the output will be a new array identical to the input but it should not be the same array
  expect(cloneArray(array)).not.toBe(array)
})
