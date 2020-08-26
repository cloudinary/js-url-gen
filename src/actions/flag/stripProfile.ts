import FlagAction from "./FlagAction";

/**
 * @memberOf Actions.Flag
 * @description Instructs Cloudinary to clear all ICC color profile data included with the image.
 */
function stripProfile(): FlagAction{
  return new FlagAction('strip_profile');
}

export default stripProfile;
