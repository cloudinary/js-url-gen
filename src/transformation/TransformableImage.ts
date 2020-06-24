import Transformation from "./Transformation";
import {IBorderAction} from "../actions/border/IBorderAction";
import {IResizeAction} from "../actions/resize/IResizeAction";
import {IRoundCornersAction} from "../actions/roundCorners/IResizeAction";
import createCloudinaryURL from "../url/cloudinaryURL";
import CloudinaryConfig from "../config/CloudinaryConfig";
import ICloudinaryConfigurations from "../interfaces/Config/ICloudinaryConfigurations";
import {IDescriptor} from "../interfaces/IDescriptor";
import {IEffectAction} from "../actions/effect/IEffectAction";


/**
 * @augments Transformation
 */
class TransformableImage extends Transformation {
  config: CloudinaryConfig;
  asset: IDescriptor;
  private static config: ICloudinaryConfigurations;

  /**
   *
   * @param publicID
   */
  constructor(publicID?: string) {
    super();
    this.asset = {
      publicID
    };
  }

  setVersion(version:number): this {
    this.describeAsset({
      version
    });
    return this;
  }

  setResourceType(resourceType: string): this {
    this.describeAsset({
      resourceType
    });
    return this;
  }

  setType(type: string): this {
    this.describeAsset({
      type
    });
    return this;
  }


  /**
   * @param {IBorderAction} borderAction
   */
  border(borderAction: IBorderAction) {
    return this.addAction(borderAction);
  }

  /**
   * @param {IResizeAction} resizeAction
   */
  resize(resizeAction: IResizeAction): TransformableImage {
    return this.addAction(resizeAction);
  }

  /**
   * @param {IRoundCornersAction} roundCornersAction
   */
  roundCorners(roundCornersAction: IRoundCornersAction): TransformableImage {
    return this.addAction(roundCornersAction);
  }

  /**
   * @param {IEffectAction} effectAction
   */
  effect(effectAction: IEffectAction): TransformableImage {
    return this.addAction(effectAction);
  }

  /**
   * for current instance
   * @param {ICloudinaryConfigurations} cloudinaryConfig
   */
  setConfig(cloudinaryConfig: ICloudinaryConfigurations): TransformableImage {
    this.config = new CloudinaryConfig(cloudinaryConfig);
    return this;
  }

  setPublicID(publicID: string): TransformableImage {
    this.asset.publicID = publicID;
    return this;
  }

  sign() {
    return this;
  }

  describeAsset(assetDescriptor: IDescriptor): TransformableImage {
    Object.assign(this.asset, assetDescriptor);
    return this;
  }

  toURL(): string {
    return createCloudinaryURL(this.config, Object.assign({
      resourceType: 'image',
      type: 'upload'
    }, this.asset), this);
  }
}


export default TransformableImage;
