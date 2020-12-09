import {ISource} from "../ISource";
import {CloudinaryImage} from "../../../assets/CloudinaryImage";

/**
 * @description Defines how to manipulate an image layer, is an instance of a {@link ImageTransformation|ImageTransformation}
 * <div class="panel panel-warning">
 *   <div class="panel-heading">Notice</div>
 *   <div class="panel-body">
 *     This class is used as a Qualifier for the asset.overlay() and asset.underlay() methods.</br>
 *     You can find regular images and videos transformations below:
 *   </div>
  *   <ul>
 *     <li>{@link ImageTransformation| Image Transformations}</li>
 *     <li>{@link VideoTransformation| Video Transformations}
 *   </ul>
 * </div>
 * @class ImageSource
 * @augments {ImageTransformation}
 * @implements {ISource}
 */
class ImageSource extends CloudinaryImage implements ISource {
  getSource():string {
    return this.asset.publicID;
  }

  getTransformationString():string {
    return this.transformation.toString();
  }
}

export {ImageSource};
