/**
 * This script Adds "exports" property to package.json.
 * It fills it with key-value pars for sub-directories of /dist,
 * excluding /internal
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {resolve} = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {writeFile, readdirSync} = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../package.json');

interface Dirent {
  isDirectory: () => boolean;
  name: string;
}

// List of sub-directories under ./dist
const distSubDirectoriesArray: string[] = readdirSync(resolve('./dist'), {withFileTypes: true})
  // Filter out files
  .filter((dirent: Dirent) => dirent.isDirectory())
  // Get directory name
  .map((dirent: Dirent) => `./${dirent.name}`)
  // Exclude /internal
  .filter((dir: string) => !dir.toLowerCase().includes('/internal'))
  // Sort alphabetically
  .sort();

// Convert directory string to object of {[directory/*]: directory/*.js}
const distSubDirectoriesObj: Record<string, string> = distSubDirectoriesArray
  .reduce((obj, dir) => ({...obj, ...{[`${dir}/*`]: `${dir}/*.js`}}), {}); //

// Generate updated package json object
const resultPackageJson = JSON.stringify({
  ...packageJson,
  exports: {
    "./bundles/umd/package.json": "./bundles/umd/package.json",
    "./package.json": "./package.json",
    ...distSubDirectoriesObj,
    ".": {
      "require": "./bundles/umd/base.js",
      "default": "./index.js"
    }
  }
}, null, 2);

// Update (overwrite) package.json
writeFile(resolve('./package.json'), resultPackageJson, (err: Error) => {
  if (err) {
    return console.log(err);
  }
  console.log('Successfully updated package.json exports field');
});
