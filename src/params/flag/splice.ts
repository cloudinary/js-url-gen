import Flag from './FlagParam';

/**
 * @memberOf Params.Flag
 * @description Splices the video stipulated as an overlay on to the end of the container video instead of adding it as an
 * overlay.
 */
function splice(): Flag{
  return new Flag('splice');
}

export default splice;
