import cd from 'deep-copy';

/**
 * Deep clones the given value
 * @param val
 */
function cloneDeep<T>(val: T) {
  return cd(val);
}

export {cloneDeep};