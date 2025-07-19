# Commonplace book

## SCSS

- import `main.scss` file instead of `main.css`

```tsx
// `main.tsx`
import "../styles/main.scss";
```

- import `_variables.scss` in each scss file that uses custom properties

```scss
// `_App.scss`
@import "variables";

main {
  width: 100%;
  flex: 1;
  @include flex-col;
}
```

## Jest

### Setting up

- `npm install jest --save-dev`

- `npm install @testing-library/react --save-dev`

- `npm install ts-jest @types/jest --save-dev`

- In the `package.json`, add `"test": "jest"` to the script

- In `src`, create a folder named `__tests__` and add `<component name>.test.tsx` in it.

- `npm install ts-node @testing-library/jest-dom --save-dev`

- `npm install jest-environment-jsdom`

- In the root directory, create `jest.config.ts` and add the following to it:

```ts
// `jest.config.ts`

export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json",
    },
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};
```

- In the root directory, create `setupTests.ts` and add the following to it:

```ts
// `setupTests.ts`

import "@testing-library/jest-dom";
```

- In `tsconfig.json`, add the following:

```json
// `tsconfig.json`

  "compilerOptions": {
    "types": ["jest", "@testing-library/jest-dom"],
    "jsx": "react-jsx"
  }
```

- Make sure the following lines are included in `tsconfig.app.json`:

```json
// `tsconfig.app.json`

{
  "compilerOptions": {
    /* Bundler mode */
    "esModuleInterop": true
  },
  "include": ["src", "setupTests.ts"]
}
```
