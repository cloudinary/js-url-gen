import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * Instructs Cloudinary to run a sanitizer on the image (relevant only for the SVG format).
 *
 * @return FlagAction
 */
function sanitize(): IFlagAction{
  return new FlagAction('sanitize');
}

export default sanitize;
