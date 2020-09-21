import Flag from './FlagParam';

/**
 * @memberOf Params.Flag
 * @description When used with automatic fetch_format (f_auto): ensures that images with a transparency channel will be
 * delivered in PNG format.
 */
function preserveTransparency(): Flag{
  return new Flag('preserve_transparency');
}

export default preserveTransparency;
