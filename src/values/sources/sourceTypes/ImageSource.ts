import {ISource} from "../ISource";
import TransformableImage from "../../../transformation/TransformableImage";

/**
 * @description Defines how to manipulate an image layer, is an instance of a {@link TransformableImage|TransformableImage}
 * @class ImageSource
 * @augments {TransformableImage}
 * @implements {ISource}
 */
class ImageSource extends TransformableImage implements ISource {
  getSource():string {
    return this.asset.publicID;
  }

  getTransformationString():string {
    return this.toString();
  }
}

export {ImageSource};
