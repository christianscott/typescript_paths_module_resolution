const tsConfig = require('./tsconfig.json');
const tsConfigPaths = require('tsconfig-paths');

tsConfigPaths.register({
  baseUrl: tsConfig.compilerOptions.baseUrl,
  paths: {},
});

require('./dist/main');
