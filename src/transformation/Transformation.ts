import {IAction} from "../interfaces/IAction";
import {IBorderAction} from "../actions/border/IBorderAction";
import {IQualityAction} from "../actions/quality/IQualityAction";
import {IVariableAction} from "../actions/variable/IVariableAction";
import {IEffectAction} from "../actions/effect/IEffectAction";
import {IRotateAction} from "../actions/rotate/IRotateAction";
import {IDeliveryAction} from "../actions/delivery/IDeliveryAction";
import {INamedTransformationAction} from "../actions/namedTransformation/INamedTransformationAction";
import ICloudinaryConfigurations from "../interfaces/Config/ICloudinaryConfigurations";
import CloudinaryConfig from "../config/CloudinaryConfig";
import {IDescriptor} from "../interfaces/IDescriptor";
import createCloudinaryURL from "../url/cloudinaryURL";
import {IConditionAction} from "../actions/condition/IConditionAction";
import Param from "../parameters/Param";
import RoundCornersAction from "../actions/roundCorners/RoundCornersAction";
import {ResizeAction} from "../actions/resize/Resize";
import BackgroundAction from "../actions/background/BackgroundAction";
import {Layer} from "../actions/layers/Layers";

class Transformation {
  actions: IAction[];
  config: ICloudinaryConfigurations;
  asset: IDescriptor;

  /**
   *
   * @param publicID
   */
  constructor(publicID?: string) {
    this.actions = [];
    this.asset = {
      publicID
    };
  }

  /**
   * @param {IAction} action
   */
  addAction(action: IAction): this {
    this.actions.push(action);
    return this;
  }

  /**
   * @return {string}
   */
  toString(): string {
    return this.actions.map((action) => {
      return action.toString();
    }).join('/');
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
  border(borderAction: IBorderAction): this{
    return this.addAction(borderAction);
  }

  /**
   * @param {Resize} resizeAction
   */
  resize(resizeAction: ResizeAction): this {
    return this.addAction(resizeAction);
  }

  /**
   * @param {IQualityAction} qualityAction
   */
  quality(qualityAction: IQualityAction): this {
    return this.addAction(qualityAction);
  }

  roundCorners(roundCornersAction: RoundCornersAction): this {
    return this.addAction(roundCornersAction);
  }

  /**
   * @param overlayAction
   */
  overlay(overlayAction: Layer): this {
    overlayAction.setLayerType('l');
    return this.addAction(overlayAction);
  }

  /**
   * @param underlayAction
   */
  underlay(underlayAction: Layer): this {
    underlayAction.setLayerType('u');
    return this.addAction(underlayAction);
  }

  /**
   * @param {IVariableAction} variableAction
   */
  variable(variableAction: IVariableAction): this {
    return this.addAction(variableAction);
  }

  /**
   * @param {IConditionAction} conditionAction
   */
  ifCondition(conditionAction: IConditionAction): this {
    return this.addAction(conditionAction);
  }

  ifElse(): this {
    return this.addAction(new Param('if', 'else'));
  }

  endIfCondition(): this {
    return this.addAction(new Param('if', 'end'));
  }

  /**
   * @param {IEffectAction} effectAction
   */
  effect(effectAction: IEffectAction): this {
    return this.addAction(effectAction);
  }

  /**
   * @param action
   */
  adjust(action: IAction): this {
    return this.addAction(action);
  }

  /**
   * @param {IRotateAction} rotateAction
   */
  rotate(rotateAction: IRotateAction): this {
    return this.addAction(rotateAction);
  }

  /**
   * @param {INamedTransformationAction} namedTransformation
   */
  namedTransformation(namedTransformation:INamedTransformationAction ): this {
    return this.addAction(namedTransformation);
  }

  /**
   * @param deliveryAction
   */
  delivery(deliveryAction: IDeliveryAction): this {
    return this.addAction(deliveryAction);
  }

  /**
   * @param {BackgroundAction} backgroundAction
   */
  background(backgroundAction: BackgroundAction): this {
    return this.addAction(backgroundAction);
  }

  /**
   * for current instance
   * @param {ICloudinaryConfigurations} cloudinaryConfig
   */
  setConfig(cloudinaryConfig: ICloudinaryConfigurations): this {
    this.config = new CloudinaryConfig(cloudinaryConfig);
    return this;
  }

  setPublicID(publicID: string): this {
    this.asset.publicID = publicID;
    return this;
  }

  sign(): this {
    return this;
  }

  describeAsset(assetDescriptor: IDescriptor): this {
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

export default Transformation;
