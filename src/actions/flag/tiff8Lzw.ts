import FlagAction from "./FlagAction";
/**
 * @memberOf Actions.Flag
 * @description Generates TIFF images using LZW compression and in the TIFF8 format.
 */
function tiff8Lzw(): FlagAction{
  return new FlagAction('tiff8_lzw');
}

export default tiff8Lzw;
