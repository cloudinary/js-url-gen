import {ImageTransformation} from "../transformation/ImageTransformation";
import {CloudinaryTransformable} from "./CloudinaryTransformable";
import {LayerAction} from "../actions/layer/LayerAction";
import ICloudConfig from "../config/interfaces/Config/ICloudConfig";
import IURLConfig from "../config/interfaces/Config/IURLConfig";


/**
 * @desc Cloudinary image asset, with image-related transformations
 * @summary SDK
 * @memberOf SDK
 */
class CloudinaryImage extends CloudinaryTransformable {
  constructor(publicID?: string, cloudConfig?: ICloudConfig, urlConfig?: IURLConfig) {
    /* istanbul ignore next */
    super(publicID, cloudConfig, urlConfig, new ImageTransformation());
  }

  toURL(): string {
    return this.createCloudinaryURL(this.transformation);
  }
}


export {CloudinaryImage};
