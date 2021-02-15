/* eslint @typescript-eslint/no-var-requires: 0 */

/**
 * This file is responsible for creating the proper /dist files.
 * Typescript/Rollup will generate the bundles (./dist/bundles/esm & ./dist/bundles/umd)
 * However, to create ./dist/actions/adjust (as an example), some more work is needed.
 *
 * This file creates a package.json in each desired import path (@base/actions/adjust for example).
 * The package.json points to the right file in the ESM module
 * (@base/actions/adjust points to @base/bundles/esm/actions/adjust)
 */

const {
  copyPackageJson,
  createUMDBundleEntryPoint
} = require('./lib/entryPointsLib');


// Allows import from '@base' (With types)
copyPackageJson();

// Allows import from '@base/bundles/umd' (With types)
createUMDBundleEntryPoint();

// Force typescript to treat this file as a module
export {};
