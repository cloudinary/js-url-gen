/* eslint @typescript-eslint/no-var-requires: 0 */

/**
 * This script goes over dist files and replaces the package version placeholder to be the actual package version.
 */
const replace = require('replace-in-file');
const {version} = require('../package.json');
const {resolve} = require('path');

const distFolder = resolve('./dist');
const options = {
  files: [`${distFolder}/**/*.js`, `${distFolder}/**/*.cjs`, `${distFolder}/**/*.ts`],
  from: /PACKAGE_VERSION_INJECTED_DURING_BUILD/g,
  to: version
};

// Internationally not catching errors so that build will fail on error
const fileNamesReplaced = replace
  .sync(options)
  .filter((fileData: typeof replace.ReplaceResult) => fileData.hasChanged)
  .map((fileData: typeof replace.ReplaceResult) => fileData.file);

// files is not empty
if (fileNamesReplaced.length) {
  console.log('Successfully injected package version to dist files:', fileNamesReplaced);
} else {
  throw 'Failed to inject package version to dist files because no matching files where found';
}
