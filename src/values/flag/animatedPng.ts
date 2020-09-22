import Flag from './FlagParam';

/**
 * @memberOf Values.Flag
 * @description When converting animated images to PNG format, generates an animated PNG from all the frames in the
 * original
 * animated file instead of only from the first still frame.
 *
 * Note that animated PNGs are not supported in all browsers and versions.
 *
 */
function animatedPng(): Flag{
  return new Flag('apng');
}

export default animatedPng;
