var uut = require('../dist/es7-arrays');

describe('es7 arrays', function() {

  it('can use array comprehension ', function() {
    expect(uut.squares).toEqual([1, 4, 9]);
  });

});