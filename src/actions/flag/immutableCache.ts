import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * Sets the cache-control to immutable for the asset.
 *
 * @return static
 *
 * @see Flag::immutableCache
 */
function immutableCache(): IFlagAction{
  return new FlagAction('immutable_cache');
}

export default immutableCache;
