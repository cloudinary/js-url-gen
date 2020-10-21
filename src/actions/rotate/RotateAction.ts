import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";

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
   * @@doc
   * @description Rotate an image by using a rotationMode
   * @param {Values.RotationMode | string} rotationMode
   * For a list of supported rotation modes see {@link Values.RotationMode| types of rotation modes} for
   * possible values
   * @return {this}
   */
  mode(rotationMode: string):this {
    return this.addValueToQualifier(QUALIFIER_KEY, rotationMode);
  }

  /**
   * @description Rotate an image by the given degrees.
   * @param {number} degrees rotation in degrees e.g 90, 45, 33
   * @return {this}
   */
  angle(degrees: number): this {
    return this.addValueToQualifier(QUALIFIER_KEY, degrees);
  }
}

export {RotateAction};
export default RotateAction;
