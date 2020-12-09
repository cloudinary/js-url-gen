import {Border} from "../actions/border";
import {IReshape} from "../actions/reshape";
import ResizeSimpleAction from "../actions/resize/ResizeSimpleAction";
import DeliveryAction from "../actions/delivery/DeliveryAction";
import RoundCornersAction from "../actions/roundCorners/RoundCornersAction";
import {LayerAction} from "../actions/overlay/LayerAction";
import VariableAction from "../actions/variable/VariableAction";
import {ConditionAction} from "../actions/condition";
import Action from "../sdk/Action";
import RotateAction from "../actions/rotate/RotateAction";
import {NamedTransformationAction} from "../actions/namedTransformation/NamedTransformationAction";
import {SystemColors} from "../values/color";
import SmartObjectAction from "../actions/psdTools/SmartObjectAction";
import ClipAction from "../actions/psdTools/ClipAction";
import GetLayerAction from "../actions/psdTools/GetLayerAction";
import {Extract} from "../actions/extract";
import {FlagQualifier} from "../values/flag/FlagQualifier";
import CustomFunctionAction from "../actions/customFunction/CustomFunctionAction";
import {videoEditType} from "../actions/videoEdit";
import {EffectActions} from "../actions/effect";
import {Transformation} from "../sdk/transformation/Transformation";

/**
 * @desc Works
 * @memberOf SDK
 */
class CloudinaryTransformable {
  public transformation: Transformation;
  constructor(transformation: Transformation) {
    this.transformation = transformation;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.Border} border
   * @return {this}
   */
  border(border: Border): this {
    this.transformation.border(border);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.Reshape} reshape
   * @return {this}
   */
  reshape(reshape: IReshape): this {
    this.transformation.reshape(reshape);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.Resize} resize
   * @return {this}
   */
  resize(resize: ResizeSimpleAction): this {
    this.transformation.resize(resize);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.Delivery} quality
   * @return {this}
   */
  quality(quality: DeliveryAction): this {
    this.transformation.quality(quality);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.RoundCorners} roundCorners
   * @return {this}
   */
  roundCorners(roundCorners: RoundCornersAction): this {
    this.transformation.roundCorners(roundCorners);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @return {this}
   */
  overlay(overlayAction: LayerAction): this {
    this.transformation.overlay(overlayAction);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @return {this}
   */
  underlay(underlayAction: LayerAction): this {
    this.transformation.underlay(underlayAction);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.Variable} variableAction
   * @return {this}
   */
  addVariable(variableAction: VariableAction): this {
    this.transformation.addVariable(variableAction);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.Condition} conditionAction
   * @return {this}
   */
  ifCondition(conditionAction: ConditionAction): this {
    this.transformation.ifCondition(conditionAction);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @return {this}
   */
  ifElse(): this {
    this.transformation.ifElse();
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @return {this}
   */
  endIfCondition(): this {
    this.transformation.endIfCondition();
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.effect} effect
   * @return {this}
   */
  effect(effect: EffectActions): this {
    this.transformation.effect(effect);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.Adjust} action
   * @return {this}
   */
  adjust(action: Action): this {
    this.transformation.adjust(action);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.Rotate} rotate
   * @return {this}
   */
  rotate(rotate: RotateAction): this {
    this.transformation.rotate(rotate);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.NamedTransformation} namedTransformation
   * @return {this}
   */
  namedTransformation(namedTransformation: NamedTransformationAction): this {
    this.transformation.namedTransformation(namedTransformation);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.Delivery} deliveryAction
   * @return {this}
   */
  delivery(deliveryAction: Action): this {
    this.transformation.delivery(deliveryAction);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Values.color} color
   * @return {this}
   */
  backgroundColor(color: SystemColors): this {
    this.transformation.backgroundColor(color);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.PSDTools} action
   * @return {this}
   */
  psdTools(action: SmartObjectAction | ClipAction | GetLayerAction): this {
    this.transformation.psdTools(action);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.Extract} action
   * @return {this}
   */
  extract(action: Extract): this {
    this.transformation.extract(action);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Values.Flag} flagQualifier
   * @return {this}
   */
  addFlag(flagQualifier: FlagQualifier): this {
    this.transformation.addFlag(flagQualifier);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.CustomFunction} customFunction
   * @return {this}
   */
  customFunction(customFunction: CustomFunctionAction): this {
    this.transformation.customFunction(customFunction);
    return this;
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

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {SDK.Action} action
   * @return {this}
   */
  addAction(action: Action): this {
    this.transformation.addAction(action);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @return {string}
   */
  toString(): string {
    return this.transformation.toString();
  }
}

export {CloudinaryTransformable};
