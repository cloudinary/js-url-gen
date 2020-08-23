import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * Generate PNG images in the png24 format.
 *
 * @return FlagAction
 */
function png24(): IFlagAction{
  return new FlagAction('png24');
}

export default png24;
