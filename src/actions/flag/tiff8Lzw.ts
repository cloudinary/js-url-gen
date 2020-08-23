import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * Generates TIFF images using LZW compression and in the TIFF8 format.
 *
 * @return FlagParameter
 */
function tiff8Lzw(): IFlagAction{
  return new FlagAction('tiff8_lzw');
}

export default tiff8Lzw;
