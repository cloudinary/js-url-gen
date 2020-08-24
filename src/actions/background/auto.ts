import BackgroundAction from "./BackgroundAction";
import {IBackgroundAction} from "./IBackgroundAction";

/**
 * Applies background color automatically.
 */
function auto(): IBackgroundAction{
  return new BackgroundAction('auto');
}

export default auto;
