import fs from "fs";
import {TMP_FOLDER} from "../consts";

/**
 * Cleans up test arifacts
 */
function testCleanUp():void {
  fs.rmdirSync(`./${TMP_FOLDER}`, {recursive: true});
}

export default testCleanUp;
