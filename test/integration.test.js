describe('Jest Gherkin Integration Test', () => {
  describe('given some extra functions (words) for jest global', () => {
    describe("when I use the function 'scenario'", () => {
      test("then use the exact same functionality of 'describe'", () => {
        expect(scenario).toBe(describe);
      });
    });

    describe("when I use the function 'given'", () => {
      test("then use the exact same functionality of 'describe'", () => {
        expect(given).toBe(describe);
      });
    });

    describe("when I use the function 'when'", () => {
      test("then use the exact same functionality of 'describe'", () => {
        expect(when).toBe(describe);
      });
    });

    describe("when I use the function 'and'", () => {
      test("then use the exact same functionality of 'describe'", () => {
        expect(and).toBe(describe);
      });
    });

    describe("when I use the function 'then'", () => {
      test("then use the exact same functionality of 'it'", () => {
        expect(then).toBe(it);
      });
    });
  });
});
