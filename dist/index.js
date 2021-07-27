['given', 'when', 'and', 'scenario'].forEach(function (prop) {
  Object.defineProperty(global, prop, {
    get() {
      return global.describe;
    },
  });
});

Object.defineProperty(global, 'then', {
  get() {
    return global.test;
  },
});
