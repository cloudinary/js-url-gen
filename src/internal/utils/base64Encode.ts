/**
 *
 * @private
 * @description An isomorphic Base64 function, provides browser and server support.
 * @param {string} input - A string to encode with base64
 */
function base64Encode(input: string):string {
  // Browser
  if (typeof window !== 'undefined') {
    return btoa(input);
  } else {
    // NodeJS support
    return global.Buffer.from(input).toString('base64');
  }
}

export {base64Encode};
