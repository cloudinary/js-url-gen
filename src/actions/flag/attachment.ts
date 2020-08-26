import FlagAction from "./FlagAction";

/**
 * @memberOf Actions.Flag
 * @description Delivers the image as an attachment.
 * @param {string} filename The attachment's filename
 */
function attachment(filename?: string): FlagAction{
  return new FlagAction('attachment', filename);
}

export default attachment;
