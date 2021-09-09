import {readdirSync, statSync} from "fs";
import {join} from "path";

/**
 * Return list of files in directory including sub directories
 * @param directory
 */
function getFilesRecursively(directory: string): string[] {
  let files: string[] = [];
  const filesInDirectory = readdirSync(directory);
  for (const file of filesInDirectory) {
    const absolute = join(directory, file);
    const newFiles = statSync(absolute).isDirectory() ? getFilesRecursively(absolute) : [absolute];
    files = [...files, ...newFiles];
  }
  
  return files;
}

export {getFilesRecursively};