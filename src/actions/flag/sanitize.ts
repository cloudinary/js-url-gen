import FlagAction from "./FlagAction";

/**
 * @memberOf Actions.Flag
 * @description Instructs Cloudinary to run a sanitizer on the image (relevant only for the SVG format).
 */
function sanitize(): FlagAction{
  return new FlagAction('sanitize');
}

export default sanitize;
