import fs from 'fs';
import {TMP_FOLDER} from "../consts";

/**
 * @description Sets up the test environment by creating the required folders
 */
function createTestFolders():void {
  fs.mkdirSync(`./${TMP_FOLDER}/entry`, {recursive: true});
  fs.mkdirSync(`./${TMP_FOLDER}/bundles`, {recursive: true});
}


export default createTestFolders;
