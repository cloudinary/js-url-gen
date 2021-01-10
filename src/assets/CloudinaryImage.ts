import {ImageTransformation} from "../transformation/ImageTransformation";
import {CloudinaryTransformable} from "./CloudinaryTransformable";
import {LayerAction} from "../actions/layer/LayerAction";
import ICloudConfig from "../config/interfaces/Config/ICloudConfig";
import IURLConfig from "../config/interfaces/Config/IURLConfig";


/**
 * @desc Cloudinary image asset, with image-related transformations
 * @memberOf SDK
 */
class CloudinaryImage extends CloudinaryTransformable {
  constructor(publicID?: string, cloudConfig?: ICloudConfig, urlConfig?: IURLConfig) {
    /* istanbul ignore next */
    super(publicID, cloudConfig, urlConfig, new ImageTransformation());
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @return {this}
   */
  underlay(underlayAction: LayerAction): this {
    this.transformation.underlay(underlayAction);
    return this;
  }

  toURL(): string {
    return this.createCloudinaryURL(this.transformation);
  }
}


export {CloudinaryImage};
