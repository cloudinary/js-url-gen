/* eslint-disable @typescript-eslint/no-var-requires */

// Since interfaces are not real objects, we can't use require, but instead we use import
import {IFileStructureLevel, IFlatFileStructureLevel} from "./lib/interfaces/IFileStructure";

const fs = require('fs');
const path = require('path');
const MissingRequiredFile = require('./errors/MissingRequiredFile');
const FoundNonRequiredFile = require('./errors/FoundNonRequiredFile');

/**
 *
 * @description This function accepts a flat tree (No nesting, key value object) that represents a file system, and a path
 *              The function will ensure that all files that exist in the file system also exist in the tree
 *              If a file in the tree is equal to false, we skip the validation of this function
 * @param tree
 * @param currentPath
 */
function ensureNoUnwantedFiles(tree: IFlatFileStructureLevel, currentPath: string) {
  // List all the files that exist in the file system
  const filesInCurrentFolder = fs.readdirSync(currentPath);

  // Loop over the real files
  filesInCurrentFolder.forEach((fileInCurrentFolder:string) => {
    // If tree[fileName] is set to false, we skip to the enxt file
    const ignoreFile = tree[fileInCurrentFolder] === false;
    if (ignoreFile) {
      return; // quick exit, no need to validate anything
    }

    // If the file does not exist in the tree
    const fileNotSpecified = typeof tree[fileInCurrentFolder] === 'undefined';

    // We found a file that exists in the file system but not specified in the Tree
    if (fileNotSpecified) {
      throw new FoundNonRequiredFile(path.join(currentPath, fileInCurrentFolder));
    }
  });
}

/**
 *
 * @param obj
 */
function isFileStructure(obj: any): obj is IFileStructureLevel {
  // Typeof object is good enough
  return typeof obj === 'object';
}

/**
 *
 * @description This function accepts a Tree (key value object) representation of a file system and checks two conditions
 *              1. All files that are provided in the tree exist in the real file system (ensure files exist)
 *              2. All files in the file system exist in the Tree that was required (no unwanted files)
 *
 *              The function throws for both errors (MissingRequiredFile, FoundNonRequiredFile)
 *
 *              If a tree value (tree[fileName]) is equal to false, all validations are skipped for that file
 *              (That means we don't try to match for it, and we don't care if it exists in the file system)
 *              We also don't check any of its children.
 *
 *              It's possible to turn off FoundNonRequiredFile for a specific folder level by providing a
 *              $suppressNonRequiredFilesError flag in that level of the tree.
 *
 *              Eg. tree = {a: {$suppressNonRequiredFilesError:true, nestedUnderA: 'a file}}
 *
 *              In the above example, we won't check if a has children in the file system that don't exist in the tree
 *              But we do check that a.nestedUnderA exists in the file system
 *
 * @param treeWithFlags
 * @param currentPath
 */
function validatePackageFiles(treeWithFlags: IFileStructureLevel, currentPath = './dist') {
  // Our input represents a file structure level that might have flags.
  // We need to extract flags that might exist in this level
  const {
    $suppressNonRequiredFilesError,
    ...tree
  } = treeWithFlags;

  // Ensure no unwanted files exist in the current directory level
  if (!$suppressNonRequiredFilesError) {
    ensureNoUnwantedFiles(tree as IFlatFileStructureLevel, currentPath);
  }

  // Ensure all tree files exist in the file system
  Object.keys(tree).forEach((fileSymbol:keyof typeof tree) => {
    const fullFileSystemPath = path.join(currentPath, fileSymbol);
    const requiredFileInTree = tree[fileSymbol];

    // The required file can be either a string, or nested object.
    // If string, we can validate immediately
    if (typeof requiredFileInTree === 'string') {
      const existsInFileSystem = fs.existsSync(fullFileSystemPath, 'utf-8');

      if(!existsInFileSystem) {
        throw MissingRequiredFile(fullFileSystemPath);
      }
    }

    // The file is actually a nested object, so recurse deeper
    if (isFileStructure(requiredFileInTree)) {
      validatePackageFiles(requiredFileInTree, path.join(currentPath, fileSymbol));
    }
  });
}

module.exports = validatePackageFiles;

export {};
