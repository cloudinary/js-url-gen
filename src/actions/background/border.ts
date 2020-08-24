import BackgroundAction from "./BackgroundAction";
import {IBackgroundAction} from "./IBackgroundAction";

/**
 * Selects the predominant color while taking only the image border pixels into account.
 *
 * @return BackgroundAction
 */
function border(): IBackgroundAction{
  return new BackgroundAction('auto:border');
}

export default border;
