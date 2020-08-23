import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * When used with automatic fetch_format (f_auto): ensures that images with a transparency channel will be
 * delivered in PNG format.
 *
 * @return FlagParameter
 */
function preserveTransparency(): IFlagAction{
  return new FlagAction('preserve_transparency');
}

export default preserveTransparency;
