/**
 *
 * @private
 * @description An isomorphic Base64 function, provides browser and server support.
 * @param {string} input - A string to encode with base64
 */
function base64Encode(input: string):string {
  // These else conditions cannot be reasonably tested through Jest,
  // as Jest runs in a Node environment, and the point of this code is to be isomorphic
  /* istanbul ignore else */
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(input).toString('base64');
  } else if (typeof btoa === 'function') {
    return btoa(input);
  } else {
    // If for some reason we don't have buffer or atb, silently return a string
    // this is to avoid exceptions to be thrown from outside of this function
    return '';
  }
}

export {base64Encode};
