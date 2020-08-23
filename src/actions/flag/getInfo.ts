import FlagAction from "./FlagAction";
import {IFlagAction} from "./IFlagAction";

/**
 * Returns metadata of the input asset and of the transformed output asset in JSON instead of the transformed image.
 *
 * @return static
 *
 * @see Flag::getInfo
 */
function getInfo(): IFlagAction{
  return new FlagAction('getinfo');
}

export default getInfo;
