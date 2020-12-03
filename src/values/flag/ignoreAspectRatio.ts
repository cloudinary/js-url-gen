import {FlagQualifier} from "./FlagQualifier";

/**
 * @memberOf Values.Flag
 * @description * Allows specifying only either width or height so the value of the second axis remains as is, and is not
 * recalculated to maintain the aspect ratio of the original image.
 * @return {Values.Flag.FlagQualifier}
 */
function ignoreAspectRatio(): FlagQualifier {
  return new FlagQualifier('ignore_aspect_ratio');
}

export {ignoreAspectRatio};
