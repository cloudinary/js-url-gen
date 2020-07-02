import {IKeyObject} from "../interfaces/IKeyObject";

/**
 * Sort a map of IKeyObject by key
 * @param {<string, IKeyObject>)} map to sort
 * @Return sorted map
 */
function sortMapByKey(map: Map<string, IKeyObject>) {
  return (Array.from(map.values()) as IKeyObject[]).sort((obj1, obj2) => {
    // No need to check for equality because this is a map.
    return (obj1.key > obj2.key) ? 1 : -1;
  });
}

export {
  sortMapByKey
};
