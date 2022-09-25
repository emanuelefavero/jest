# Jest

This repository is for try out the [Jest](https://jestjs.io/) Javascript testing framework.

## Installation

```bash
npm install
```

## Usage

Test:

```bash
npm test
```

Test specific file: `npm test sum.test.js` OR `npm test sum`

Test with in depth coverage:

```bash
npm run test:coverage
```

Test in watch mode:

```bash
npm run test:watch
```

- _You can also use `yarn` instead of `npm` (the commands are the same)_

- _`test:coverage` will generate a "lcov-report" directory with reports in html files (index.html), useful if you need to show the results to your colleagues_

- _You can also skip tests with `test.skip()` method_

## Unit testing

While using Jest, it is recommended to use the technique of [unit testing](https://en.wikipedia.org/wiki/Unit_testing)

- > Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.

- > _Generally it is a bad practice to create big and complex jest tests, the reason is when a test eventually fails it will be harder to know the source of the problem_
