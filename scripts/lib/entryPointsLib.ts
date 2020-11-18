/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * This file contains utility functions related to creating ./dist entry-points (such as @base/actions/adjust)
 */

const fs = require('fs');

// All of our package.jsons need to contain this property to allow tree shaking
const commonPackageProperties = {
  sideEffects: false
};

/**
 * Creates the npm entry-point for the UMD Bundle
 * Allows users to import from '@base/bundles/umd'
 */
function createUMDBundleEntryPoint() {
  const packageJson = Object.assign({
    "types": `../../index.d.ts`,
    "main": `./base.js`
  }, commonPackageProperties);

  // create umd
  fs.writeFileSync(
    `dist/bundles/umd/package.json`,
    JSON.stringify(packageJson, null, '\t')
  );
}


/**
 * @description Since only ./dist/ is packaged to npm, we need to copy a proper package.json file to it
 *              That will allow `import {TransformableImage} from '@cloudinary/base`
 */
function createMainEntryPoint() {
  const projectJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
  delete projectJson.scripts;
  delete projectJson.devDependencies;
  projectJson.main = './bundles/umd/base.js';
  projectJson.browser = './index.js';

  Object.assign(projectJson, commonPackageProperties);
  fs.writeFileSync('./dist/package.json', JSON.stringify(projectJson, null, '\t'));
}


module.exports = {
  createMainEntryPoint,
  createUMDBundleEntryPoint
};


