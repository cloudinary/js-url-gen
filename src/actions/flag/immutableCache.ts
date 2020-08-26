import FlagAction from "./FlagAction";

/**
 * @memberOf Actions.Flag
 * @description Sets the cache-control to immutable for the asset.
 */
function immutableCache(): FlagAction{
  return new FlagAction('immutable_cache');
}

export default immutableCache;
