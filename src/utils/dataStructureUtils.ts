/**
 * Sort a map by key
 * @param map <string, { key: unknown }>
 * @Return sorted map
 */
function sortMapByKey(map: Map<string, { key: unknown }>) {
  return (Array.from(map.values())).sort((obj1, obj2) => (obj1.key > obj2.key ? 1 : -1));
}

export {
  sortMapByKey
};
