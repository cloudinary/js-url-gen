import {ISource} from "../ISource";
import {CloudinaryVideo} from "../../../assets/CloudinaryVideo";

/**
 * @description Defines how to manipulate a video layer, is an instance of a {@link VideoTransformation|VideoTransformation}
 * <div class="panel panel-primary">
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
 * @class VideoSource
 * @augments {VideoTransformation}
 * @implements {ISource}
 */
class VideoSource extends CloudinaryVideo implements ISource {
  getSource():string {
    return this.asset.publicID;
  }

  getTransformationString():string {
    return this.transformation.toString();
  }
}

export {VideoSource};
