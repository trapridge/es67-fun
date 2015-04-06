export let sum = (x, y) => x + y;
export let squares = [1, 2, 3, 4, 5].map(n => n * n);
export let lexicalThis = function() {
    let that = this;
    return () => {
      return that === this;
    };
};
export let invocationThis = function() {
  let that = this;
  return function() {
    return that !== this;
  };
};