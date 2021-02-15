/* eslint @typescript-eslint/no-var-requires: 0 */

const {
  copyPackageJson
} = require('./lib/entryPointsLib');

copyPackageJson('src');

// Prevents all variables above to be global
export {};
