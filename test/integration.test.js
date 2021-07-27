describe('Jest Gherkin Integration Test', () => {
  describe('given some extra functions (words) for jest global', () => {
    describe("when I use the function 'scenario'", () => {
      test("then use the exact same functionality of 'describe'", () => {
        expect(scenario).toBeInstanceOf(Function);
      });
    });

    describe("when I use the function 'given'", () => {
      test("then use the exact same functionality of 'describe'", () => {
        expect(given).toBeInstanceOf(Function);
      });
    });

    describe("when I use the function 'when'", () => {
      test("then use the exact same functionality of 'describe'", () => {
        expect(when).toBeInstanceOf(Function);
      });
    });

    describe("when I use the function 'and'", () => {
      test("then use the exact same functionality of 'describe'", () => {
        expect(and).toBeInstanceOf(Function);
      });
    });

    describe("when I use the function 'then'", () => {
      test("then use the exact same functionality of 'it'", () => {
        expect(then).toBeInstanceOf(Function);
      });
    });
  });
});
