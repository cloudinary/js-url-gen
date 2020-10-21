import BorderAction from "./BorderAction";

/**
 * @memberOf Actions.Border
 * @description Sets the style of the border.
 * @return {BorderAction}
 */
function solid(color: string, width: number): BorderAction {
  return new BorderAction('solid', color, width);
}

export default solid;
