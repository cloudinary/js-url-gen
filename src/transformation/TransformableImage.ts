import Transformation from "./Transformation";
import {IBorderAction} from "../actions/border/IBorderAction";
import {IResizeAction} from "../actions/resize/IResizeAction";
import {IRoundCornersAction} from "../actions/roundCorners/IResizeAction";
import createCloudinaryURL from "../url/cloudinaryURL";
import CloudinaryConfig from "../config/CloudinaryConfig";
import ICloudinaryConfigurations from "../interfaces/Config/ICloudinaryConfigurations";
import {IDescriptor} from "../interfaces/IDescriptor";
import {IEffectAction} from "../actions/effect/IEffectAction";
import {IQualityAction} from "../actions/quality/IQualityAction";
import {IRotateAction} from "../actions/rotate/IRotateAction";
import {IVariableAction} from "../actions/variable/IVariableAction";
import {ILayerAction} from "../actions/layers/ILayerAction";
import {INamedTransformationAction} from "../actions/namedTransformation/INamedTransformationAction";
import {IColorAction} from "../actions/color/IColorAction";

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

  setAssetType(assetType: string): this {
    this.describeAsset({
      assetType
    });
    return this;
  }

  setStorageType(storageType: string): this {
    this.describeAsset({
      storageType
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
   * @param {IQualityAction} qualityAction
   */
  quality(qualityAction: IQualityAction): TransformableImage {
    return this.addAction(qualityAction);
  }

  /**
   * @param {IRoundCornersAction} roundCornersAction
   */
  roundCorners(roundCornersAction: IRoundCornersAction): TransformableImage {
    return this.addAction(roundCornersAction);
  }

  /**
   * @param overlayAction
   */
  overlay(overlayAction: ILayerAction) {
    return this.addAction(overlayAction);
  }

  /**
   * @param {IVariableAction} variableAction
   */
  variable(variableAction: IVariableAction): TransformableImage {
    return this.addAction(variableAction);
  }

  /**
   * @param {IEffectAction} effectAction
   */
  effect(effectAction: IEffectAction): TransformableImage {
    return this.addAction(effectAction);
  }

  /**
   * @param {IColorAction} colorAction
   */
  color(colorAction: IColorAction): TransformableImage {
    return this.addAction(colorAction);
  }

  /**
   * @param {IRotateAction} rotateAction
   */
  rotate(rotateAction: IRotateAction): TransformableImage {
    return this.addAction(rotateAction);
  }

  /**
   * @param {INamedTransformationAction} namedTransformation
   */
  namedTransformation(namedTransformation:INamedTransformationAction ) {
    return this.addAction(namedTransformation);
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
      assetType: 'image',
      storageType: 'upload'
    }, this.asset), this);
  }
}

export default TransformableImage;
