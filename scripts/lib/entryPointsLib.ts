// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const commonPackageProperties = {
  sideEffects:false
};

/**
 * @description Utlity - Capitalize the first character of a string
 * @param str
 * @return {string}
 */
function capitalize(str: string) {
  return str.toUpperCase()[0] + str.slice(1);
}

/**
 * @description Generates a package.json in ${entryPointInDist/**} and each actions/{name} directory.
 *
 *              Example:
 *              Assuming actions has a file structure of dist/actions/dir/Dir.js
 *              And calling createEntryPointFromESMPath('actions', 'my/entry/point');
 *
 *              The function will generate an importable entrypoint in our npm package.
 *              import Foo from '@base/my/entry/point/dir' will now be possible
 *
 * @param {string} pathInESMBundle A path to a folder that exists within dist/ (Has to be a folder)
 *                 The internal structure has to be in the form of ${pathInESMBundle}/dir/Dir.js,
 *                 For example, if pathInESMBundle == 'actions',
 *                 Then this path must exist dist/actions/resize/Resize.js
 *
 * @param {string} entryPointInDist The desired importable entrypoint: import foo from '@base/${entryPointInDist}'
 */
function createEntryPointFromESMPath(pathInESMBundle: string, entryPointInDist: string) {
  const FULL_SOURCE_PATH = `./dist/bundles/esm/${pathInESMBundle}`;
  const FULL_SOURCE_PATH_TYPES = `./dist/types/${pathInESMBundle}`;
  const FULL_ENTRY_POINT_PATH = `./dist/${entryPointInDist}`;

  let files;

  try {
    files = fs.readdirSync(FULL_SOURCE_PATH);
  } catch {
    throw `The path you specified in bundles/esm: ${FULL_SOURCE_PATH} does not exist, cannot be read or is not a folder`;
  }

  // Create actions
  fs.mkdirSync(FULL_ENTRY_POINT_PATH, {recursive: true});

  files.forEach((name: string) => {
    const isDir = fs.lstatSync(`${FULL_SOURCE_PATH}/${name}`).isDirectory();

    if (isDir) {
      fs.mkdirSync(`${FULL_ENTRY_POINT_PATH}/${name}`);

      const FULL_TYPES_PATH = `${FULL_SOURCE_PATH_TYPES}/${name}/${capitalize(name)}.d.ts`;
      const FULL_JS_PATH = `${FULL_SOURCE_PATH}/${name}/${capitalize(name)}.js`;

      // The depth count in the file structure.
      // We start with 2 as everything is at best two levels down: dist/dir/package.json
      const depthCountInsideDist = 2 + entryPointInDist.split('/').length - 1;
      const rootPathToDist = '../'.repeat(depthCountInsideDist).slice(0, -1); // remove last / from string


      const hasTypes = fs.existsSync(FULL_TYPES_PATH);
      const hasFile = fs.existsSync(FULL_JS_PATH);

      if (!hasFile || !hasTypes) {
        const msg = `
          [${!hasFile ? 'X' : 'V'}] ${FULL_JS_PATH} 
          [${!hasTypes ? 'X' : 'V'}] ${FULL_TYPES_PATH}
        `;

        throw `\n***\nBUILD ERROR - Invalid folder structure detected \n\n${msg} \n***\n`;
      }


      const packageJson = Object.assign({
        "types": `${rootPathToDist}/types/${pathInESMBundle}/${name}/${capitalize(name)}.d.ts`,
        "main": `${rootPathToDist}/bundles/esm/${pathInESMBundle}/${name}/${capitalize(name)}.js`
      }, commonPackageProperties);

      fs.writeFileSync(
        `${FULL_ENTRY_POINT_PATH}/${name}/package.json`,
        JSON.stringify(packageJson,null, '\t')
      );
    }
  });
}


/**
 * Creates the npm entrypoint for the UMD Bundle
 * Allows users to import from '@base/bundles/umd'
 */
function createUMDBundleEntryPoint() {
  const packageJson = Object.assign({
    "types": `../../types/index.d.ts`,
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
  projectJson.main = './bundles/esm/index.js';

  Object.assign(projectJson, commonPackageProperties);
  fs.writeFileSync('./dist/package.json', JSON.stringify(projectJson, null, '\t'));
}


module.exports = {
  createEntryPointFromESMPath,
  createMainEntryPoint,
  createUMDBundleEntryPoint
};


