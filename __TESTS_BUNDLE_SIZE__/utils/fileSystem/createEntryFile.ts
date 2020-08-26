import fs from "fs";
import log from "../log";
import {TMP_FOLDER} from "../consts";

/**
 *
 */
function createEntryFile(fileName:string, str:string):void {
  log.debug(`writing file ${fileName}`);
  fs.writeFileSync(`./${TMP_FOLDER}/entry/${fileName}.js`, str);
}

export default createEntryFile;
