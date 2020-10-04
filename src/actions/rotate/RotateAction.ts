import {IAction} from "../../interfaces/IAction";
import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";

const PARAM_KEY = 'a';

import * as RotationModes from '../../values/rotate/Rotate';

/**
 * @description Rotates or flips an image or video.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#rotating_image | Rotating images}
 * {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#rotating_videos | Rotating videos}
 * @class RotateAction
 * @augments {Action}
 */
class RotateAction extends Action implements IAction {
  constructor(angle?: number) {
    super();
    this.addQualifier(new Qualifier(PARAM_KEY, angle));
  }

  /**
   * @@doc
   * @description Rotate an image by using a rotationMode
   * @param rotationMode
   * For a list of supported rotation modes see {@link Values.rotationModeValues| types of rotation modes} for
   * possible values
   * @return {this}
   */
  mode(rotationMode: string):this {
    switch (rotationMode) {
      case RotationModes.AUTO_RIGHT:
        return this.addValueToQualifier(PARAM_KEY, 'auto_right');
      case RotationModes.AUTO_LEFT:
        return this.addValueToQualifier(PARAM_KEY, 'auto_left');
      case RotationModes.HORIZONTAL_FLIP:
        return this.addValueToQualifier(PARAM_KEY, 'hflip');
      case RotationModes.IGNORE:
        return this.addValueToQualifier(PARAM_KEY, 'ignore');
      case RotationModes.VERTICAL_FLIP:
        return this.addValueToQualifier(PARAM_KEY, 'vflip');
    }
  }

  /**
   * @description Rotate an image by the given degrees.
   * @param {number} degrees rotation in degrees e.g 90, 45, 33
   * @return {this}
   */
  angle(degrees: number): this {
    return this.addValueToQualifier(PARAM_KEY, degrees);
  }
}

export {RotateAction};
export default RotateAction;
