const {stringLength, reverseString} = require('./function');

test('race equals 4', () => {
  expect(stringLength('race')).toBe(4);
});

test('Empty string should return -1', () => {
  expect(stringLength('')).toBe(-1);
});

test('Race should return ecaR', () => {
  expect(reverseString('Race')).toBe('ecaR');
});