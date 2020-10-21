import Flag from './FlagQualifier';

/**
 * @memberOf Values.Flag
 * @description Delivers the image as an attachment.
 * @param {string} filename The attachment's filename
 * @return {Flag}
 */
function attachment(filename?: string): Flag{
  return new Flag('attachment', filename);
}

export default attachment;
