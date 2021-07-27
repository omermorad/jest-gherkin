['given', 'when', 'and', 'scenario'].forEach(function (prop) {
  Object.defineProperty(global, prop, {
    get: function get() {
      return function () {
        const prefix = prop === 'scenario' ? 'Scenario: ' : prop;
        return global.describe(
          ''.concat(prefix, ' ').concat(arguments.length <= 0 ? undefined : arguments[0]),
          arguments.length <= 1 ? undefined : arguments[1]
        );
      };
    },
  });
});
Object.defineProperty(global, 'then', {
  get: function get() {
    return function () {
      return global.describe(
        'then '.concat(arguments.length <= 0 ? undefined : arguments[0]),
        arguments.length <= 1 ? undefined : arguments[1]
      );
    };
  },
});
