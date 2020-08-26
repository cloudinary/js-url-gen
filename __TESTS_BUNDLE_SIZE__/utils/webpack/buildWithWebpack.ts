import webpack from 'webpack';
import {TMP_FOLDER} from "../consts";


/**
 * Build a file from ./tmp/entry/{entryFile} and output the bundle to ./tmp/bundles/{outputFile}
 * @param {string } entryFile - The name of the file to create within ./tmp/entry/
 * @param {string} outputFile - The name of the file to create within ./tmp/bundles/
 * @returns Promise
 */
function buildWithWebpack(entryFile:string, outputFile: string):Promise<void> {
  return new Promise((resolve, reject) => {
    webpack({
      entry: `./${TMP_FOLDER}/entry/${entryFile}.js`,
      output: {
        path: process.cwd(),
        filename: `./${TMP_FOLDER}/bundles/${outputFile}.js`
      }
    }, (err, stats) => { // Stats Object
      const info = stats.toJson();

      if (err) {
        throw err;
        // Handle errors here
      }

      if (stats.hasErrors()) {
        throw info.errors.toString();
      }
      resolve();
    });
  });
}

export default buildWithWebpack;
