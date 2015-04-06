var uut = require('../dist/es6-objects');

describe('es6 objects', function() {

  it('can use computed keys', function() {
    expect(uut.computedKeysObj).toEqual({
      key1: 'value1',
      key2: 'value2',
      key3: 'value3'
    });
  });

  it('can have method definitions', function() {
    expect(uut.computedKeysObj).toEqual({
      key1: 'value1',
      key2: 'value2',
      key3: 'value3'
    });
  });

});