import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Adds ICC color space metadata to the image, even when the original image doesn't contain any ICC data.
 * @return {Values.Flag.FlagQualifier}
 */
function forceIcc(): FlagQualifier {
  return new FlagQualifier('force_icc');
}

export {forceIcc};
