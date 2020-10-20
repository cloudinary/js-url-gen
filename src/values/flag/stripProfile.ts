import Flag from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Instructs Cloudinary to clear all ICC color profile data included with the image.
 */
function stripProfile(): Flag{
  return new Flag('strip_profile');
}

export default stripProfile;
