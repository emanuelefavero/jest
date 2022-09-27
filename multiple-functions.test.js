const add = require('./multiple-functions').add
const subtract = require('./multiple-functions').subtract

test('add', () => {
  expect(add(1, 2)).toBe(3)
})

test('subtract', () => {
  expect(subtract(1, 2)).toBe(-1)
})
