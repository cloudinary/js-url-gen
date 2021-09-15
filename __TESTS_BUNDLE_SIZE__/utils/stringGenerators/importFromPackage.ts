/**
 * Utility function used to import items from the index of the project
 * @param {string} exportedObject - The name of an exported object in index, for example ImageTransformation.
 *                                  The result will be `import {ImageTransformation} from '../../dist'
 * @returns string
 */
function importFromPackage(exportedObject: string): string {
  const importString = exportedObject.includes('* as') ? exportedObject : `{${exportedObject}}`;
  const variableName = exportedObject.includes('* as') ? exportedObject.split(' as ')[1] : exportedObject;

  return `
    import ${importString} from "${process.cwd()}/dist";
    // we console log to force the bundle not to tree shake
    console.log(${variableName});  
  `;
}

export default importFromPackage;
