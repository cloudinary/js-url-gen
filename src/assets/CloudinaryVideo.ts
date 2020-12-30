import {VideoTransformation} from "../transformation/VideoTransformation";
import {CloudinaryTransformable} from "./CloudinaryTransformable";
import {Action} from "../internal/Action";
import {videoEditType} from "../actions/videoEdit";
import ICloudConfig from "../config/interfaces/Config/ICloudConfig";
import IURLConfig from "../config/interfaces/Config/IURLConfig";



/**
 * @desc Cloudinary image asset, with video-related transformations
 * @memberOf SDK
 */
class CloudinaryVideo extends CloudinaryTransformable {
  constructor(publicID?: string, cloudConfig?: ICloudConfig, urlConfig?: IURLConfig) {
    super(publicID, cloudConfig, urlConfig, new VideoTransformation());
    this.assetType = 'video';
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

  toURL(): string {
    return this.createCloudinaryURL(this.transformation);
  }
}


export {CloudinaryVideo};
