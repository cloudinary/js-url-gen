import Flag from './FlagQualifier';
/**
 * @memberOf Values.Flag
 * @description Generates TIFF images using LZW compression and in the TIFF8 format.
 * @return {Flag}
 */
function tiff8Lzw(): Flag{
  return new Flag('tiff8_lzw');
}

export default tiff8Lzw;
