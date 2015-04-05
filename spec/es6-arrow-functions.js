var uut = require('../dist/es6-arrow-functions');

describe('es6-arrow-functions', function() {

  it('expression function', function() {
    expect(uut.sum(1, 2)).toEqual(3);
  });

  it('callback function', function() {
    expect(uut.squares).toEqual([1, 4, 9, 16, 25]);
  });

});