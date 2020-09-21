import {ISource} from "./ISource";
import TransformableImage from "../../transformation/TransformableImage";

/**
 * @extends {TransformableImage}
 * @implements {ISource}
 * @memberOf Params.Sources
 */
class ImageSource extends TransformableImage implements ISource {
  getSource():string {
    return this.asset.publicID;
  }

  getTransformationString():string {
    return this.toString();
  }
}

export default ImageSource;