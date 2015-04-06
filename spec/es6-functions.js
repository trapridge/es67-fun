var uut = require('../dist/es6-functions');

describe('es6 functions', function() {

  it('can use arrow function as an expression', function() {
    expect(uut.sum(1, 2)).toEqual(3);
  });

  it('can use arrow function as a callback function', function() {
    expect(uut.squares).toEqual([1, 4, 9, 16, 25]);
  });

  it('arrow functions have lexical this', function() {
    expect(uut.lexicalThis()()).toEqual(true);
    expect(uut.invocationThis()()).toEqual(true);
  });

});