import cd from 'clone-deep';

/**
 * Deep clones the given value
 * @param val
 */
function cloneDeep<T>(val: T) {
  return cd(val, true);
}

export {cloneDeep};