import Flag from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Sets the cache-control to immutable for the asset.
 * @return {Flag}
 */
function immutableCache(): Flag{
  return new Flag('immutable_cache');
}

export default immutableCache;
