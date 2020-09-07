import BlurredBackgroundAction from "./BlurredBackgroundAction";


/**
 * @memberOf Actions.Background
 * @description Applies blurred background (Relevant only for videos).
 */
function blurred(): BlurredBackgroundAction {
  return new BlurredBackgroundAction();
}

export default blurred;
