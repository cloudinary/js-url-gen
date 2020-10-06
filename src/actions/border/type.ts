import BorderAction from "./BorderAction";

/**
 * @memberOf Actions.Border
 * @description Sets the style of the border.
 * @param {string} borderType The style of the border. Currently only "solid" is supported.
 * @return {BorderAction}
 */
function type(borderType: string): BorderAction {
  return new BorderAction(borderType);
}

export default type;
