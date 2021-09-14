import {BorderAction} from "../actions/border.js";
import {IReshape} from "../actions/reshape.js";
import ResizeSimpleAction from "../actions/resize/ResizeSimpleAction.js";
import RoundCornersAction from "../actions/roundCorners/RoundCornersAction.js";
import {LayerAction} from "../actions/layer/LayerAction.js";
import VariableAction from "../actions/variable/VariableAction.js";
import {ConditionalAction} from "../actions/conditional.js";
import {Action} from "../internal/Action.js";
import RotateAction from "../actions/rotate/RotateAction.js";
import {NamedTransformationAction} from "../actions/namedTransformation/NamedTransformationAction.js";
import {SystemColors} from "../qualifiers/color.js";
import {ExtractAction} from "../actions/extract.js";
import {SmartObjectAction} from "../actions/psdTools/SmartObjectAction.js";
import {ClipAction} from "../actions/psdTools/ClipAction.js";
import {GetLayerAction} from "../actions/psdTools/GetLayerAction.js";
import {FlagQualifier} from "../qualifiers/flag/FlagQualifier.js";
import CustomFunctionAction from "../actions/customFunction/CustomFunctionAction.js";
import {EffectActions} from "../actions/effect.js";
import {CloudinaryFile} from "./CloudinaryFile.js";
import {Transformation} from "../transformation/Transformation.js";
import IURLConfig from "../config/interfaces/Config/IURLConfig.js";
import ICloudConfig from "../config/interfaces/Config/ICloudConfig.js";
import {IDeliveryAction} from "../actions/delivery.js";
import {IAdjustAction} from "../actions/adjust.js";
import {DeliveryQualityAction} from "../actions/delivery/DeliveryQuality.js";
import {ITrackedPropertiesThroughAnalytics} from "../sdkAnalytics/interfaces/ITrackedPropertiesThroughAnalytics.js";
import {AnimatedAction} from "../actions/animated.js";

/**
 * @desc Cloudinary Transformable interface, extended by any class that needs a Transformation Interface
 * @summary SDK
 * @memberOf SDK
 */
class CloudinaryTransformable extends CloudinaryFile {
  public transformation: Transformation;
  constructor(publicID:string, cloudConfig?: ICloudConfig, urlConfig?: IURLConfig, transformation?: Transformation) {
    /* istanbul ignore next */
    super(publicID, cloudConfig, urlConfig);
    this.transformation = transformation;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Animated} animated
   * @return {this}
   */
  animated(animated: AnimatedAction): this{
    this.transformation.animated(animated);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Border} border
   * @return {this}
   */
  border(border: BorderAction): this {
    this.transformation.border(border);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Reshape} reshape
   * @return {this}
   */
  reshape(reshape: IReshape): this {
    this.transformation.reshape(reshape);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Resize} resize
   * @return {this}
   */
  resize(resize: ResizeSimpleAction): this {
    this.transformation.resize(resize);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Delivery} quality
   * @return {this}
   */
  quality(quality: DeliveryQualityAction): this {
    this.transformation.quality(quality);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.RoundCorners} roundCorners
   * @return {this}
   */
  roundCorners(roundCorners: RoundCornersAction): this {
    this.transformation.roundCorners(roundCorners);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @return {this}
   */
  overlay(overlayAction: LayerAction): this {
    this.transformation.overlay(overlayAction);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Variable} variableAction
   * @return {this}
   */
  addVariable(variableAction: VariableAction): this {
    this.transformation.addVariable(variableAction);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Condition} conditionalAction
   * @return {this}
   */
  conditional(conditionalAction: ConditionalAction): this {
    this.transformation.conditional(conditionalAction);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.effect} effect
   * @return {this}
   */
  effect(effect: EffectActions): this {
    this.transformation.effect(effect);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Adjust} action
   * @return {this}
   */
  adjust(action: IAdjustAction): this {
    this.transformation.adjust(action);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Rotate} rotate
   * @return {this}
   */
  rotate(rotate: RotateAction): this {
    this.transformation.rotate(rotate);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.NamedTransformation} namedTransformation
   * @return {this}
   */
  namedTransformation(namedTransformation: NamedTransformationAction): this {
    this.transformation.namedTransformation(namedTransformation);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Delivery} deliveryAction
   * @return {this}
   */
  delivery(deliveryAction: IDeliveryAction): this {
    this.transformation.delivery(deliveryAction);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Qualifiers.color} color
   * @return {this}
   */
  backgroundColor(color: SystemColors): this {
    this.transformation.backgroundColor(color);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.PSDTools} action
   * @return {this}
   */
  psdTools(action: SmartObjectAction | ClipAction | GetLayerAction): this {
    this.transformation.psdTools(action);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Extract} action
   * @return {this}
   */
  extract(action: ExtractAction): this {
    this.transformation.extract(action);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Qualifiers.Flag | string} flagQualifier
   * @return {this}
   */
  addFlag(flagQualifier: FlagQualifier | string): this {
    this.transformation.addFlag(flagQualifier);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.CustomFunction} customFunction
   * @return {this}
   */
  customFunction(customFunction: CustomFunctionAction): this {
    this.transformation.customFunction(customFunction);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {SDK.Action | string} action
   * @return {this}
   */
  addAction(action: Action | string): this {
    this.transformation.addAction(action);
    return this;
  }

  /**
   * @description Extend your transformation with another transformation
   * @param { string | SDK.Transformation } tx
   */
  addTransformation(tx: Transformation | string): this {
    this.transformation.addTransformation(tx);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @return {string}
   */
  toString(): string {
    return this.transformation.toString();
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @return {this}
   */
  underlay(underlayAction: LayerAction): this {
    this.transformation.underlay(underlayAction);
    return this;
  }

  toURL(overwriteOptions: {trackedAnalytics?: Partial<ITrackedPropertiesThroughAnalytics>} = {}): string {
    return this.createCloudinaryURL(this.transformation, overwriteOptions?.trackedAnalytics);
  }
}

export {CloudinaryTransformable};
