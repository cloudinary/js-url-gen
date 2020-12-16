import {Transformation} from "../../transformation/Transformation";
import {ImageTransformation} from "../../transformation/ImageTransformation";


/**
 * @memberOf Values.Source
 * @description An abstract class extended by all Source objects
 */
abstract class BaseSource {
  protected _transformation:Transformation;

  /**
   * @description
   * Apply a transformation on the image source of the layer
   * @param {SDK.ImageTransformation} t An image transformation to apply to the layer
   * @returns {this}
   */
  transformation(t: ImageTransformation): this {
    this._transformation = t;
    return this;
  }

  /**
   * @description Returns the Transformation of the source
   * @return {SDK.Transformation}
   */
  getTransformation(): Transformation {
    return this._transformation;
  }

  abstract getOpenSourceString(): string
}

export {BaseSource};
