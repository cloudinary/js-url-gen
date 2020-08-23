import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * Trims pixels according to a clipping path included in the original image
 * (e.g., manually created using PhotoShop).
 *
 * @return FlagParameter
 */
function clip(): IFlagAction{
  return new FlagAction('clip');
}

export default clip;
