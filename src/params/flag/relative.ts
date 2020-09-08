import Flag from './FlagParam';

/**
 * @memberOf Params.Flag
 * @descriptionModify percentage-based width & height parameters of overlays
 * (e.g., 0.5) to be relative to the containing video instead of the added layer
 */
function relative(): Flag{
  return new Flag('relative');
}

export default relative;
