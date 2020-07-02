import {IKeyObject} from "../interfaces/IKeyObject";

function sortMapByKey(map: Map<string, IKeyObject>) {
  return (Array.from(map.values()) as IKeyObject[]).sort((obj1, obj2) => {
    // No need to check for equality because this is a map.
    return (obj1.key > obj2.key) ? 1 : -1;
  });
}

export {
  sortMapByKey
};
