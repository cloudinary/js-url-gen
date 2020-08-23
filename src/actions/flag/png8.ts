import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * Generate PNG images in the PNG8 format.
 *
 * @return FlagAction
 */
function png8(): IFlagAction{
  return new FlagAction('png8');
}

export default png8;
