/* eslint @typescript-eslint/no-var-requires: 0 */

const {
  createEntryPointFromESMPath,
  createMainEntryPoint,
  createUMDBundleEntryPoint
} = require ('./lib/entryPointsLib');


// Create an Entry Point from everything under bundles/esm/actions -> dist/actions
createEntryPointFromESMPath('actions', 'actions');

// Create an Entry Point from everything under bundles/esm/colors -> dist/colors
createEntryPointFromESMPath('constants', 'constants');

// Allows import from '@base' (With types)
createMainEntryPoint();

// Allows import from '@base/bundles/umd' (With types)
createUMDBundleEntryPoint();

// Force typescript to treat this file as a module
export {};
