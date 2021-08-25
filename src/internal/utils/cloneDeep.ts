import cd from 'clone-deep';

function cloneDeep<T>(val: T) {
  return cd(val, true);
}

export {cloneDeep};