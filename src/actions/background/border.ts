import BackgroundAction from "./BackgroundAction";

/**
 * @memberOf Actions.Background
 * @description Selects the predominant color while taking only the image border pixels into account.
 * @return {BackgroundAction}
 */
function border(): BackgroundAction{
  return new BackgroundAction('auto:border');
}

export default border;
