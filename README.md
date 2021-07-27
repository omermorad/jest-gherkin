# Jest Gherkin Plugin

This is a plugin for Jest that helps you write your tests more easily
with the awesome Gherkin language (by Cucumber).

This plugin is not a replacement for cucumber, it is just uses the same vocabulary of Cucumber and the Gherkin language

## Installation
```bash
npm i -D jest-gherkin
```

## How is it different from `jest-cucumber`?
`jest-cucumber` is looking for feature files that needs to be defined for the test to run.
Besides, it suggests a weird syntax which is not nested like you can see in the following example.

You can see the full example of `jest-cucumber` here and see if it works for you
https://www.npmjs.com/package/jest-cucumber.


### A word about Cucumber tests
It's a bit difficult to work fully with Cucumber's testing system.
The tests carry with them state between different methods, and many IDEs have difficulty providing a holistic solution, which also makes it difficult to debug.
Bottom line is Cucumber tests can be complicated to maintain and to work with.

## Example
```js
import { PasswordValidator } from './password-validator';

describe('The title of you test', () => {
  let passwordValidator = new PasswordValidator();
  let accessGranted = false;

  beforeEach(() => {
    passwordValidator = new PasswordValidator();
  });

  scenario('Entering a correct password', () => {
    given('I have previously created a password', () => {
      passwordValidator.setPassword('1234');

      when('I enter my password correctly', () => {
        accessGranted = passwordValidator.validatePassword('1234');

        then('I should be granted access', () => {
          expect(accessGranted).toBeTruthy();
        });
      });
    });
  });
});
```

## Setup
In your jest config file add the following property:

```json
"setupFiles": [
  "jest-gherkin",
]
```

If you are using TypeScript you have to add the following to add the types:

`tsconfig.json` file:
```json
{
  "compilerOptions": {
    ...,
    "types": [
      ...,
      "jest",
      "jest-gherkin"
    ]
  }
}
```

## Acknowledgements
[Gherkin Reference](https://cucumber.io/docs/gherkin/reference/)
