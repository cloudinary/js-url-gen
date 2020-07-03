/**
 * Sort a map by key
 * @param map <string, unknown>
 * @Return array of map's values sorted by key
 */
function mapToSortedArray(map: Map<string, unknown>) {
  const array = Array.from(map.entries()).sort();

  return array.map((v) => v[1]);
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 * Based on lodash/isString
 * @param {*} value The value to check.
 * @returns {boolean} `true` if `value` is a string, else `false`.
 */
function isString(value: unknown) {
  const type = typeof value;
  return type === 'string' || (
    type === 'object'
    && value != null
    && !Array.isArray(value)
    && Object.prototype.toString.call(value) == '[object String]'
  );
}

export {
  isString,
  mapToSortedArray
};
