/**
 *
 * @private
 * @description An isomorphic Base64 function, provides browser and server support.
 * @param {string} input - A string to encode with base64
 */
function base64Encode(input: string):string {
  // Browser
  let encodedResult = '';

  if (typeof window !== 'undefined') {
    encodedResult = btoa(input);
  } else {
    // NodeJS support
    encodedResult = global.Buffer.from(input).toString('base64');
  }

  return encodedResult;
}

export {base64Encode};
