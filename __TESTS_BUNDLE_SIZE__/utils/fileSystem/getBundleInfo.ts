import fs from "fs";
import {TMP_FOLDER} from "../consts";

/**
 * Gets file information (like size, and blocks) given a path
 * Path is relative to tmp/bundles/ for ease of use, and is appended with .js
 * @param {string} fileName
 */
function getBundleInfo(fileName: string): fs.Stats {
  return fs.statSync(`./${TMP_FOLDER}/bundles/${fileName}.js`);
}

export default getBundleInfo;
