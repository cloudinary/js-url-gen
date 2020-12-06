import {FlagQualifier} from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Delivers the image as an attachment.
 * @param {string} filename The attachment's filename
 * @return {Values.Flag.FlagQualifier}
 */
function attachment(filename?: string): FlagQualifier {
  return new FlagQualifier('attachment', filename);
}

export default attachment;
