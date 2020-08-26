import fs from 'fs';
import childProcess from "child_process";
import log from "../log";

/**
 * @description Ensures ./dist exists
 */
function createDistFolder():void {
  // Create ./dist if needed
  if (!fs.existsSync('./dist')) {
    log.info('Could not find ./dist, running build');
    childProcess.execSync('npm run build');
  }
}


export default createDistFolder;
