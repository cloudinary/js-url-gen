/**
 * Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.
 * @param obj
 * @param path
 * @param defaultValue
 */
function get(obj: unknown, path: string, defaultValue: unknown = undefined): unknown {
  try {
    const pathArr = path.split('.');
    let result = obj;

    for (let i = 0; i < pathArr.length; i++) {
      result = (result as Record<string, unknown>)[pathArr[i]];
    }

    return result;
  } catch (e) {
    return defaultValue;
  }
}

export {get};
