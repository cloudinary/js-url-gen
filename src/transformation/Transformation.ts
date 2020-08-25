import {IAction} from "../interfaces/IAction";
import {IBorderAction} from "../actions/border/IBorderAction";
import {IResizeAction} from "../actions/resize/IResizeAction";
import {IQualityAction} from "../actions/quality/IQualityAction";
import {ILayerAction} from "../actions/layers/ILayerAction";
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
import {IBackgroundAction} from "../actions/background/IBackgroundAction";

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
  border(borderAction: IBorderAction) {
    return this.addAction(borderAction);
  }

  /**
   * @param {IResizeAction} resizeAction
   */
  resize(resizeAction: IResizeAction): this {
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
  overlay(overlayAction: ILayerAction) {
    return this.addAction(overlayAction);
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
  adjust(action: IAction) {
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
  namedTransformation(namedTransformation:INamedTransformationAction ) {
    return this.addAction(namedTransformation);
  }

  /**
   * @param deliveryAction
   */
  delivery(deliveryAction: IDeliveryAction): this {
    return this.addAction(deliveryAction);
  }

  /**
   * @param {IBackgroundAction} backgroundAction
   */
  background(backgroundAction: IBackgroundAction): this {
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

  sign() {
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
