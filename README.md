# tsconfig-paths module resolution bug

Run `npm install && npm run test` to reproduce the bug.

I would expect to see `The base package says: I am the node_modules/base package`. Instead, it throws an error due to
`base.iAmTheNodeModulesBasePackage` not being a function. This is because the `require('base')` call inside
`node_modules/some_package/index.js` resolves to `dist/base/index.js` rather than
`node_modules/some_package/node_modules/base/index.js` like I would expect.
