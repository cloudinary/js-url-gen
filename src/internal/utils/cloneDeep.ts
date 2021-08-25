import cd from 'lodash.clonedeep';

/**
 * Deep clones the given value
 * @param val
 */
function cloneDeep<T>(val: T) {
  return cd(val);
}

export {cloneDeep};