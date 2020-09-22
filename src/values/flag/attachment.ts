import Flag from './FlagParam';

/**
 * @memberOf Values.Flag
 * @description Delivers the image as an attachment.
 * @param {string} filename The attachment's filename
 */
function attachment(filename?: string): Flag{
  return new Flag('attachment', filename);
}

export default attachment;
