/**
 * Utility function used to import items from the index of Base
 * @param {string} exportedObject - The name of an exported object in index, for example TransformableImage.
 *                                  The result will be `import {TransformableImage} from '../../dist'
 * @returns string
 */
function importFromBase(exportedObject: string): string {
  return `
    import {${exportedObject}} from "${process.cwd()}/dist";
    // we console log to force the bundle not to tree shake
    console.log(${exportedObject});  
  `;
}

export default importFromBase;
