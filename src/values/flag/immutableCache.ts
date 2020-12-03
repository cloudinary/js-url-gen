import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Sets the cache-control to immutable for the asset.
 * @return {Values.Flag.FlagQualifier}
 */
function immutableCache(): FlagQualifier {
  return new FlagQualifier('immutable_cache');
}

export {immutableCache};
