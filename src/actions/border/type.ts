import BorderAction from "./BorderAction";

/**
 * @memberOf Actions.Border
 * @description Adds a border around an image or video.
 * @return {@link Solid} (SolidBorder instance)
 */
function type(borderStyle: string): BorderAction {
  return new BorderAction(borderStyle);
}

export default type;