import BackgroundAction from "./BackgroundAction";

/**
 * @memberOf Actions.Background
 * @description Selects the predominant color while taking all pixels in the image into account.
 */
function predominant(): BackgroundAction{
  return new BackgroundAction('auto:predominant');
}

export default predominant;
