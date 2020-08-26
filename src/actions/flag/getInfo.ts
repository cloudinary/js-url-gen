import FlagAction from "./FlagAction";

/**
 * @memberOf Actions.Flag
 * @description Returns metadata of the input asset and of the transformed output asset in JSON instead of the
 * transformed image.
 */
function getInfo(): FlagAction{
  return new FlagAction('getinfo');
}

export default getInfo;
