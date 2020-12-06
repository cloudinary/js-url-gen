import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Instructs Cloudinary to clear all ICC color profile data included with the image.
 * @return {Values.Flag.FlagQualifier}
 */
function stripProfile(): FlagQualifier {
  return new FlagQualifier('strip_profile');
}

export {stripProfile};
