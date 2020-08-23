import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * Keeps the copyright related fields when stripping meta-data.
 *
 * @return static
 *
 * @see Flag::keepAttribution
 */
function keepAttribution(): IFlagAction{
  return new FlagAction('keep_attribution');
}

export default keepAttribution;
