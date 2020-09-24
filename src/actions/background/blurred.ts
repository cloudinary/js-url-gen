import BlurredBackgroundAction from "./BlurredBackgroundAction";


/**
 * @memberOf Actions.Background
 * @description Applies blurred background (Relevant only for videos).
 * @return {BlurredBackgroundAction}
 */
function blurred(): BlurredBackgroundAction {
  return new BlurredBackgroundAction();
}

export default blurred;
