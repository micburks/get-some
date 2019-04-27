module.exports = function getSome(factory) {
  let count = 0;
  return new Proxy({}, {
    get(obj, prop) {
      if (prop === Symbol.iterator) {
        return () => ({
          next: () => ({ value: factory(count++), done: false }),
        });
      } else {
        throw new Error('The return value of `getSome` must be destructured as an array');
      }
    }
  });
}