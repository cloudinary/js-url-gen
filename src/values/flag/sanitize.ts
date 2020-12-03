import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Instructs Cloudinary to run a sanitizer on the image (relevant only for the SVG format).
 * @return {Values.Flag.FlagQualifier}
 */
function sanitize(): FlagQualifier {
  return new FlagQualifier('sanitize');
}

export {sanitize};
