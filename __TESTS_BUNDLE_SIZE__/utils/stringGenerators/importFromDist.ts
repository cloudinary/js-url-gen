/**
 * Utility function used to import items from ./dist
 * @param {string} pathInDist - relative path inside ./dist, for example 'actions/resize'
 *                              The result will be `import resize from '../../dist/resize`;
 * * @returns string
 */
function importFromDist(pathInDist: string): string {
  const splitBy = pathInDist.split('/');
  const variableName = splitBy[splitBy.length - 1];

  return `
    import * as ${variableName} from '${process.cwd()}/dist/${pathInDist}';
    // we console log to force the bundle not to tree shake
    console.log(${variableName});
  `;
}


export default importFromDist;
