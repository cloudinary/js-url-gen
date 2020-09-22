import Flag from './FlagParam';

/**
 * @memberOf Values.Flag
 * @description Sets the cache-control to immutable for the asset.
 */
function immutableCache(): Flag{
  return new Flag('immutable_cache');
}

export default immutableCache;
