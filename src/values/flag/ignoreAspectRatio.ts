import Flag from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description * Allows specifying only either width or height so the value of the second axis remains as is, and is not
 * recalculated to maintain the aspect ratio of the original image.
 */
function ignoreAspectRatio(): Flag{
  return new Flag('ignore_aspect_ratio');
}

export default ignoreAspectRatio;
