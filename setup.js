const properties = ['given', 'when', 'and', 'scenario']

properties.forEach(function (prop) {
  Object.defineProperty(global, prop, {
    get: function () {
      return global.describe;
    },
  });
})

Object.defineProperty(global, 'then', {
  get: function () {
    return global.test;
  },
});
