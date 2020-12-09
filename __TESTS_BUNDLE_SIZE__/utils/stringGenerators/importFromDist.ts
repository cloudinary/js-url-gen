/**
 * @desc capitalize the first character of a string
 * @param string
 */
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Utility function used to import items from ./dist
 * @param {string} pathInDist - relative path inside ./dist, for example 'actions/resize'
 *                              The result will be `import resize from '../../dist/resize`;
 * * @returns string
 */
function importFromDist(pathInDist: string): string {
  const splitBy = pathInDist.split('/');
  const variableName = capitalizeFirstLetter(splitBy[splitBy.length - 1]);

  return `
    import {${variableName}} from '${process.cwd()}/dist/${pathInDist}';
    // we console log to force the bundle not to tree shake
    console.log(${variableName});
  `;
}


export default importFromDist;
