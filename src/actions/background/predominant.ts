import BackgroundAction from "./BackgroundAction";
import {IBackgroundAction} from "./IBackgroundAction";

/**
 * Selects the predominant color while taking all pixels in the image into account.
 *
 * @return BackgroundAction
 */
function predominant(): IBackgroundAction{
  return new BackgroundAction('auto:predominant');
}

export default predominant;
