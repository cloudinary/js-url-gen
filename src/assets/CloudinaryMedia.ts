import {CloudinaryTransformable} from "./CloudinaryTransformable";
import {Action} from "../internal/Action";
import {videoEditType} from "../actions/videoEdit";
import {createCloudinaryURL} from "../internal/url/cloudinaryURL";
import {LayerAction} from "../actions/layer/LayerAction";
import {Transformation} from "../transformation/Transformation";



/**
 * @desc Cloudinary media asset, with all possible transformations
 * @memberOf SDK
 */
class CloudinaryMedia extends CloudinaryTransformable {
  constructor(publicID?: string) {
    super(publicID, new Transformation());
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.Transcode} action
   * @return {this}
   */
  transcode(action: Action): this {
    this.transformation.transcode(action);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.VideoEdit} action
   * @return {this}
   */
  videoEdit(action: videoEditType): this {
    this.transformation.videoEdit(action);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @return {this}
   */
  underlay(underlayAction: LayerAction): this {
    this.transformation.underlay(underlayAction);
    return this;
  }

  toURL(): string {
    return createCloudinaryURL(this.config, Object.assign({
      assetType: 'image', // media asset defaults to image
      storageType: 'upload'
    }, this.asset), this.transformation);
  }
}


export {CloudinaryMedia};
