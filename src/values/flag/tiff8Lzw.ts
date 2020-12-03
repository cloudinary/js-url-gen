import {FlagQualifier} from './FlagQualifier';
/**
 * @memberOf Values.Flag
 * @description Generates TIFF images using LZW compression and in the TIFF8 format.
 * @return {Values.Flag.FlagQualifier}
 */
function tiff8Lzw(): FlagQualifier {
  return new FlagQualifier('tiff8_lzw');
}

export {tiff8Lzw};
