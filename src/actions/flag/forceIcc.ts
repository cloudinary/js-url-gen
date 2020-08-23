import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * Adds ICC color space metadata to the image, even when the original image doesn't contain any ICC data.
 *
 * @return static
 */
function forceIcc(): IFlagAction{
  return new FlagAction('force_icc');
}

export default forceIcc;
