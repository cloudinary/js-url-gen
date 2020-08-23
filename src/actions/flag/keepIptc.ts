import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * Keeps all meta-data.
 *
 * @return static
 *
 * @see Flag::keepIptc
 */
function keepIptc(): IFlagAction{
  return new FlagAction('keep_iptc');
}

export default keepIptc;
