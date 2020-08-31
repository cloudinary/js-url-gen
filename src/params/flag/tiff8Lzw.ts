import {Flag} from './Flag';
/**
 * @memberOf Params.Flag
 * @description Generates TIFF images using LZW compression and in the TIFF8 format.
 */
function tiff8Lzw(): Flag{
  return new Flag('tiff8_lzw');
}

export default tiff8Lzw;
