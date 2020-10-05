import ResizeSimpleAction from "./ResizeSimpleAction";

/**
 * @class FillPadAction
 * @augments ResizeSimpleAction
 * @@doc
 * @description A class used to define resize fillPad.
 */
class FillPadAction extends ResizeSimpleAction {
  constructor(width?: number|string, height?: number|string) {
    /* istanbul ignore next */
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    super('fill_pad', width, height);
  }
}

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
 * @return {FillPadAction}
 */
function fillPad(width?: string|number, height?: string|number) :FillPadAction {
  return new FillPadAction(width, height);
}

export default fillPad;
