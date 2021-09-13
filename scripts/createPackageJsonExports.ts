const {resolve} = require('path');
const getFiles = require('./getFilesRecursively').getFilesRecursively;
const {writeFile, existsSync} = require('fs');
const packageJson = require('../package.json');

const packageJsonFilePath = resolve('./package.json');

/**
 * Get folder name with same name as the file (without extension) if such folder exists.
 * @param file
 */
function getFolderWithFileName(file: string, fileSeparator: string): string {
  const pointIndex = file.lastIndexOf(fileSeparator);

  if (pointIndex > -1) {
    const absoluteDirWithSameName = file.slice(0, -(file.length - pointIndex));
    if (existsSync(absoluteDirWithSameName)) {
      return absoluteDirWithSameName;
    }
  }

  return '';
}

// Get list of .js files
const allFiles: string[] = getFiles(resolve('./dist')).map((file: string) => (`./${file.slice(file.indexOf('dist/') + 5)}`));

const jsFiles: string[] = allFiles.filter((file: string) => file.endsWith('.js'));
const packageJsonFiles: string[] = allFiles.filter((file: string) => file.endsWith('package.json'));

// Add folders of files that have a sibling directory with the same name
const folders: string[] = jsFiles.filter((file) => {
  !!getFolderWithFileName(file, '.');
}).map((file) => getFolderWithFileName(file, '.'));

let exportFiles = jsFiles.filter((file) => {
  // Remove files that are contained in folders list
  return !folders.find((folder) => file.startsWith(`${folder}/`));
});

exportFiles = [...exportFiles, ...folders, ...packageJsonFiles].sort();
exportFiles = aggregateExportFiles(exportFiles);

const result: Record<string, string> = {};

exportFiles.forEach((file: string) => {
  if (file.endsWith('.js')) {
    // Add exports for .js files
    result[file.slice(0, -3)] = file;
    result[file] = file;
    if (file.endsWith('/index.js')) {
      const folder = getFolderWithFileName(file, '/index.js');
      result[folder] = file;
      result[`${folder}/`] = file;
    }
  } else if (file.endsWith('package.json')) {
    // Add exports for package.json files
    result[file] = file;
  } else {
    // Add exports for folders
    result[file] = `${file}.js`;
    result[`${file}.js`] = `${file}.js`;
  }
});

const resultPackageJson = {...packageJson, exports: result};

writeFile(packageJsonFilePath, JSON.stringify(resultPackageJson, null, 2), (err: Error) => {
  if (err) {
    return console.log(err);
  }
  console.log('Successfully updated package.json exports field');
});

