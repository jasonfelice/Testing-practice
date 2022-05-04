const {stringLength, reverseString, Calculator, capitalize} = require('./function');


describe('String length', () => {
  test('race equals 4', () => {
    expect(stringLength('race')).toBe(4);
  });
  
  test('Empty string should return -1', () => {
    expect(stringLength('')).toBe(-1);
  });
});


test('Race should return ecaR', () => {
  expect(reverseString('Race')).toBe('ecaR');
});

describe('Calculator', () => {
  const newObject = new Calculator(10, 5);
  test('Add 10 and 5', () => {
    expect(newObject.add()).toBe(15);
  });
  test('Subtract 10 and 5', () => {
    expect(newObject.subtract()).toBe(5);
  });
  test('Multiply 10 and 5', () => {
    expect(newObject.multiply()).toBe(50);
  });
  test('Divide 10 and 5', () => {
    expect(newObject.divide()).toBe(2);
  });
});

test('bass should return Bass', () => {
  expect(capitalize('bass')).toBe('Bass');
})