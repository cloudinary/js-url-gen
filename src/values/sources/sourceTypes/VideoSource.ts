import {ISource} from "../ISource";
import TransformableVideo from "../../../transformation/TransformableVideo";

/**
 * @description Defines how to manipulate a video layer, is an instance of a {@link TransformableVideo|TransformableVideo}
 * <div class="panel panel-primary">
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
 * @class VideoSource
 * @augments {TransformableVideo}
 * @implements {ISource}
 */
class VideoSource extends TransformableVideo implements ISource {
  getSource():string {
    return this.asset.publicID;
  }

  getTransformationString():string {
    return this.toString();
  }
}

export {VideoSource};
