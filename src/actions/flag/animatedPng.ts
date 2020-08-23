import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * When converting animated images to PNG format, generates an animated PNG from all the frames in the original
 * animated file instead of only from the first still frame.
 *
 * Note that animated PNGs are not supported in all browsers and versions.
 *
 * @return FlagAction
 */
function animatedPng(): IFlagAction{
  return new FlagAction('apng');
}

export default animatedPng;
