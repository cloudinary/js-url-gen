import BorderAction from "./BorderAction";

/**
 * @memberOf Actions.Border
 * @description Sets the style of the border.
 * @param {string} borderStyle The style of the border. Currently only "solid" is supported.
 * @return {BorderAction}
 */
function type(borderStyle: string): BorderAction {
  return new BorderAction(borderStyle);
}

export default type;
