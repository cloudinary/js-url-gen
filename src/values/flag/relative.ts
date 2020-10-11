import Flag from './FlagParam';

/**
 * @memberOf Values.Flag
 * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the containing image instead of the added layer.
 * @return {Flag}
 */
function relative(): Flag{
  return new Flag('relative');
}

export default relative;
