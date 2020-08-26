import BackgroundAction from "./BackgroundAction";

/**
 * @memberOf Actions.Background
 * @description Applies background color automatically.
 */
function auto(): BackgroundAction{
  return new BackgroundAction('auto');
}

export default auto;
