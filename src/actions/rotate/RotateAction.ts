import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import {RotationMode} from "../../values/RotationMode";
import {RotationModeQualifierValue} from "../../values/rotate/RotationModeQualifierValue";

const QUALIFIER_KEY = 'a';


/**
 * @description Rotates or flips an image or video.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#rotating_image | Rotating images}
 * {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#rotating_videos | Rotating videos}
 * @class RotateAction
 * @augments {Action}
 */
class RotateAction extends Action {
  constructor(angle?: number) {
    super();
    this.addQualifier(new Qualifier(QUALIFIER_KEY, angle));
  }

  /**
   * @description Rotates an asset using a defined mode.
   * @param {Values.RotationMode | string} rotationMode
   * For a list of supported rotation modes see {@link Values.rotationModeValues| types of rotation modes} for
   * possible values
   * @return {this}
   */
  mode(rotationMode: RotationModeQualifierValue | string):this {
    return this.addValueToQualifier(QUALIFIER_KEY, rotationMode);
  }

  /**
   * @description Rotates an asset by the specified degrees.
   * @param {number} degrees rotation in degrees e.g 90, 45, 33
   * @return {this}
   */
  angle(degrees: number): this {
    return this.addValueToQualifier(QUALIFIER_KEY, degrees);
  }
}

export default RotateAction;
