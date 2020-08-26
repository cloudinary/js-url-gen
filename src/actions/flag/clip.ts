import FlagAction from "./FlagAction";

/**
 * @memberOf Actions.Flag
 * @description Trims pixels according to a clipping path included in the original image
 * (e.g., manually created using PhotoShop).
 */
function clip(): FlagAction{
  return new FlagAction('clip');
}

export default clip;
