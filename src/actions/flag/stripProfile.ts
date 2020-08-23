import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * Instructs Cloudinary to clear all ICC color profile data included with the image.
 *
 * @return FlagAction
 */
function stripProfile(): IFlagAction{
  return new FlagAction('strip_profile');
}

export default stripProfile;
