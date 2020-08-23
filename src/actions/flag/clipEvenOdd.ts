import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * Trims pixels according to a clipping path included in the original image (e.g., manually created using PhotoShop)
 * using an evenodd clipping rule.
 *
 * @return FlagParameter
 */
function clipEvenOdd(): IFlagAction{
  return new FlagAction('clip_evenodd');
}

export default clipEvenOdd;
