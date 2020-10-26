import {ISource} from "../ISource";
import TransformableImage from "../../../transformation/TransformableImage";

/**
 * @description Defines how to manipulate an image layer, is an instance of a {@link TransformableImage|TransformableImage}
 * <div class="panel panel-warning">
 *   <div class="panel-heading">Notice</div>
 *   <div class="panel-body">
 *     This class is used as a Qualifier for the asset.overlay() and asset.underlay() methods.</br>
 *     You can find regular images and videos transformations below:
 *   </div>
  *   <ul>
 *     <li>{@link TransformableImage| Image Transformations}</li>
 *     <li>{@link TransformableVideo| Video Transformations}
 *   </ul>
 * </div>
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
