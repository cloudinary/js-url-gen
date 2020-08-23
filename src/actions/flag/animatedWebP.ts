import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * When converting animated images to WebP format, generate an animated WebP from all the frames in the original
 * animated file instead of only from the first still frame.
 *
 * Note that animated WebPs are not supported in all browsers and versions.
 *
 * @return FlagAction
 */
function animatedWebP(): IFlagAction{
  return new FlagAction('awebp');
}

export default animatedWebP;
