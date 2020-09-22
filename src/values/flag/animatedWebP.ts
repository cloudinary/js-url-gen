import Flag from './FlagParam';

/**
 * @memberOf Values.Flag
 * @description When converting animated images to WebP format, generate an animated WebP from all the frames in the
 * original
 * animated file instead of only from the first still frame.
 *
 * Note that animated WebPs are not supported in all browsers and versions.
 *
 */
function animatedWebP(): Flag{
  return new Flag('awebp');
}

export default animatedWebP;
