import {ImageTransformation} from "../transformation/ImageTransformation.js";
import {CloudinaryTransformable} from "./CloudinaryTransformable.js";
import ICloudConfig from "../config/interfaces/Config/ICloudConfig.js";
import IURLConfig from "../config/interfaces/Config/IURLConfig.js";


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
}


export {CloudinaryImage};
