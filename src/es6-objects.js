let i = 1;
export let computedKeysObj = {
  ['key' + i]: 'value' + (i++),
  ['key' + i]: 'value' + (i++),
  ['key' + i]: 'value' + (i++)
};

export let methodDefinitionObj = {
  foo(bar) {
    return bar;
  },
  foobar: 'foobar'
};