import ResizePadAction from "../shared/ResizePadAction";

/**
 * @memberOf Actions.Resize
 * @description
 * Tries to prevent a "bad crop" by first attempting to use the fill mode, but adding padding if it is determined
 * that more of the original image needs to be included in the final image.
 *
 * Especially useful if the aspect ratio of the delivered image is considerably different from the original's
 * aspect ratio.
 *
 * Only supported in conjunction with Automatic cropping.
 *
 * @param {number|string} width The required width of a transformed asset.
 * @param {number|string} height The required height of a transformed asset.
 * @return {ResizePadAction}
 */
function fillPad(width?: string|number, height?: string|number) :ResizePadAction {
  return new ResizePadAction('fill_pad', width, height);
}

export default fillPad;
