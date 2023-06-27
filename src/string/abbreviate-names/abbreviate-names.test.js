const abbreviate = require('./abbreviate-names')

test('abbreviate function exists', () => {
  expect(typeof abbreviate).toBe('function')
})

test('abbreviate as one parameter', () => {
  expect(abbreviate.length).toBe(1)
})

test('testing uppercase', () => {
  expect(abbreviate('lucas suprium david')).toBe('LSD')
})

test('abbreviate as one parameter', () => {
  expect(abbreviate.length).toBe(1)
})

// TODO add your tests here
