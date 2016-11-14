var Calculator = require('../src/scripts/calculator');
var assert = require('assert');

describe('calculator', () => {
  var calculator

  beforeEach( () => {
    calculator = new Calculator();
  })

  afterEach( () => {
    calculator = null;
  })

  it('adds numbers', () => {
    assert(4 === calculator.add(1, 3));
  })

})
