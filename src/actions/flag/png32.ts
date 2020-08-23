import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * Generate PNG images in the png32 format.
 *
 * @return FlagAction
 */
function png32(): IFlagAction{
  return new FlagAction('png32');
}

export default png32;
