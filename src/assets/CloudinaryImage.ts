import {ImageTransformation} from "../transformation/ImageTransformation";
import {CloudinaryTransformable} from "./CloudinaryTransformable";
import {LayerAction} from "../actions/layer/LayerAction";
import {createCloudinaryURL} from "../internal/url/cloudinaryURL";


/**
 * @desc Cloudinary image asset, with image-related transformations
 * @memberOf SDK
 */
class CloudinaryImage extends CloudinaryTransformable {
  constructor(publicID?: string) {
    super(publicID, new ImageTransformation());
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
      assetType: 'image',
      storageType: 'upload'
    }, this.asset), this.transformation);
  }
}


export {CloudinaryImage};
