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
 * @implements {IAssetSource}
 */
import {BaseSource} from "../BaseSource";
import {ImageTransformation} from "../../../transformation/ImageTransformation";

class VideoSource extends BaseSource {
  readonly _publicID: string;

  constructor(publicID: string) {
    super();
    this._publicID = publicID;
    this._transformation = new ImageTransformation();
  }

  getOpenSourceString(): string {
    return `video:${this._publicID}`;
  }

  transformation(t: ImageTransformation): this {
    this._transformation = t;
    return this;
  }
}

export {VideoSource};
