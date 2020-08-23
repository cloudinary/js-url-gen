import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * When used together with automatic quality (q_auto):
 * allow switching to PNG8 encoding if the quality algorithm decides that it's more efficient.
 *
 * @return FlagAction
 */
function anyFormat(): IFlagAction{
  return new FlagAction('any_format');
}

export default anyFormat;
