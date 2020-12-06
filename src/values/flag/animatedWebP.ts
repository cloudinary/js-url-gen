import {FlagQualifier} from "./FlagQualifier";

/**
 * @memberOf Values.Flag
 * @description When converting animated images to WebP format, generate an animated WebP from all the frames in the
 * original
 * animated file instead of only from the first still frame.
 *
 * Note that animated WebPs are not supported in all browsers and versions.
 * @return {Values.Flag.FlagQualifier}
 */
function animatedWebP(): FlagQualifier {
  return new FlagQualifier('awebp');
}

export {animatedWebP};
