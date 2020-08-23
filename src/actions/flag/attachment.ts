import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * Delivers the image as an attachment.
 *
 * @param {string} filename The attachment's filename
 **
 * @see Flag::attachment
 * @return FlagAction
 */
function attachment(filename?: string): IFlagAction{
  return new FlagAction('attachment', filename);
}

export default attachment;
