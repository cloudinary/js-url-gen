import CutByImage from "./CutByImage";
import {ImageSource} from "../../values/sources/sourceTypes/ImageSource";

type IReshape = CutByImage;

/**
 * @doc
 * @memberOf Actions
 * @namespace Reshape
 */
class Reshape {
  /**
   * @description Trims pixels according to the transparency levels of a given overlay image.
   * Wherever the overlay image is transparent, the original is shown, and wherever the overlay is opaque, the resulting image is transparent.
   * @param {ImageSource} imageSource
   * @memberOf Actions.Reshape
   */
  static cutByImage(imageSource: ImageSource): CutByImage {
    return new CutByImage(imageSource);
  }

  /**
   * @desc TBD
   * @memberOf Actions.Reshape
   */
  static distortArc(): void {
    // Stub, awaiting implementation
  }

  /**
   * @desc TBD
   * @memberOf Actions.Reshape
   */
  static distort(): void {
    // Stub, awaiting implementation
  }

  /**
   * @desc TBD
   * @memberOf Actions.Reshape
   */
  static shear(): void {
    // Stub, awaiting implementation
  }
}

const {cutByImage} = Reshape;
export {cutByImage, Reshape, IReshape};
