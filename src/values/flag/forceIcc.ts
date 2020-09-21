import Flag from './FlagParam';

/**
 * @memberOf Params.Flag
 * @description Adds ICC color space metadata to the image, even when the original image doesn't contain any ICC data.
 */
function forceIcc(): Flag{
  return new Flag('force_icc');
}

export default forceIcc;
