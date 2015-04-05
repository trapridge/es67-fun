var uut = require('../dist/es7-array-comprehension.js');

describe('es7-array-comprehension', function() {
  it('array literal comprehension', function() {
    expect(uut.squares).toEqual([1, 4, 9]);
  });
});