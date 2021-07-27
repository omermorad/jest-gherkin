['given', 'when', 'and', 'scenario'].forEach((prop) => {
  Object.defineProperty(global, prop, {
    get() {
      return (...args) => {
        const prefix = prop === 'scenario' ? 'Scenario: ' : prop;
        return global.describe(`${prefix} ${args[0]}`, args[1]);
      };
    },
  });
});

Object.defineProperty(global, 'then', {
  get() {
    return (...args) => global.it(`then ${args[0]}`, args[1]);
  },
});
