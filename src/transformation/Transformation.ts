import {IAction} from "../interfaces/IAction";
import {INamedTransformationAction} from "../actions/namedTransformation/INamedTransformationAction";
import ICloudinaryConfigurations from "../interfaces/Config/ICloudinaryConfigurations";
import CloudinaryConfig from "../config/CloudinaryConfig";
import {IDescriptor} from "../interfaces/IDescriptor";
import createCloudinaryURL from "../url/cloudinaryURL";
import Qualifier from "../qualifier/Qualifier";
import RoundCornersAction from "../actions/roundCorners/RoundCornersAction";
import BackgroundAction from "../actions/background/BackgroundAction";
import CustomFunctionAction from "../actions/customFunction/CustomFunctionAction";
import {Layer} from "../actions/overlay/Overlay";
import {Flag} from "../values/flag/Flag";
import Action from "../actions/Action";
import {TrimAction} from "../actions/videoEdit/TrimAction";
import {DeliveryAction} from "../actions/delivery/Delivery";
import BlurredBackgroundAction from "../actions/background/BlurredBackgroundAction";
import VariableAction from "../actions/variable/VariableAction";
import CutterAction from "../actions/cutter/CutterAction";
import BorderAction from "../actions/border/BorderAction";
import {ConditionAction} from "../actions/condition/Condition";
import ResizeSimpleAction from "../actions/resize/ResizeActions/ResizeSimpleAction";
import RotateAction from "../actions/rotate/RotateAction";
import SmartObject from "../actions/getSmartObject/GetSmartObjectAction";
import SimpleEffectAction from "../actions/effect/EffectActions/SimpleEffectAction";

// TODO: add these video actions:
/*
import {SubtitlesAction} from "../actions/layers/SubtitlesAction";
import {VideoConcatenateAction} from "../actions/layers/VideoConcatenateAction";
import {KeyframeIntervalAction} from "../actions/transcode/KeyframeIntervalAction";
import {BitRateAction} from "../actions/transcode/BitRateAction";
import {StreamingProfileAction} from "../actions/transcode/StreamingProfileAction";
import {VideoSamplingAction} from "../actions/transcode/VideoSamplingAction";
import {VideoEditAction} from "../actions/transcode/VideoEditAction";
*/

/**
 * @description - Defines how to transform an asset
 * @class Transformation
 */
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


  /**
   * @param version
   */
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
   * @description Adds a border around the image.
   * @param {BorderAction} borderAction
   */
  border(borderAction: BorderAction): this{
    return this.addAction(borderAction);
  }


  cutter(cutterAction: CutterAction): this {
    return this.addAction(cutterAction);
  }

  /**
   * @description Resize the asset using provided resize action
   * @param {ResizeSimpleAction} resizeAction
   */
  resize(resizeAction: ResizeSimpleAction): this {
    return this.addAction(resizeAction);
  }

  /**
   * @param {DeliveryAction} quality
   */
  quality(quality: DeliveryAction): this {
    return this.addAction(quality);
  }

  /**
   * @description Rounds the specified corners of an image.
   * @param roundCornersAction
   */
  roundCorners(roundCornersAction: RoundCornersAction): this {
    return this.addAction(roundCornersAction);
  }

  /**
   * @description Adds an overlay over the base image.
   * @param overlayAction
   */
  overlay(overlayAction: Layer): this {
    overlayAction.setLayerType('l');
    return this.addAction(overlayAction);
  }

  /**
   * @description Adds an underlay under the base image.
   * @param underlayAction
   */
  underlay(underlayAction: Layer): this {
    underlayAction.setLayerType('u');
    return this.addAction(underlayAction);
  }

  /**
   * @description Defines an new user variable.
   * @param {VariableAction} variableAction
   */
  addVariable(variableAction: VariableAction): this {
    return this.addAction(variableAction);
  }

  /**
   * @description Specifies a condition to be met before applying a transformation.
   * @param {ConditionAction} conditionAction
   */
  ifCondition(conditionAction: ConditionAction): this {
    return this.addAction(conditionAction);
  }

  /**
   * @description Specifies a transformation that is applied in the case that the initial condition is evaluated as
   * false.
   */
  ifElse(): this {
    return this.addAction(new Qualifier('if', 'else'));
  }

  /**
   * @description Finishes the conditional transformation.
   */
  endIfCondition(): this {
    return this.addAction(new Qualifier('if', 'end'));
  }

  /**
   * @description Applies a filter or an effect on an asset.
   * @param {SimpleEffectAction} effectAction
   */
  effect(effectAction: Action): this {
    return this.addAction(effectAction);
  }

  /**
   * @description Applies adjustment effect on an asset.
   * @param action
   */
  adjust(action: IAction): this {
    return this.addAction(action);
  }

  /**
   * @description Rotates the asset by the given angle.
   * @param {RotateAction} rotateAction
   */
  rotate(rotateAction: RotateAction): this {
    return this.addAction(rotateAction);
  }

  /**
   * @description Applies a pre-defined named transformation of the given name.
   * @param {INamedTransformationAction} namedTransformation
   */
  namedTransformation(namedTransformation:INamedTransformationAction ): this {
    return this.addAction(namedTransformation);
  }

  /**
   * @description Applies delivery action.
   * @param deliveryAction
   */
  delivery(deliveryAction: Action): this {
    return this.addAction(deliveryAction);
  }

  /**
   * @description Sets the color of the background.
   * @param {BackgroundAction} backgroundAction
   */
  background(backgroundAction: BackgroundAction | BlurredBackgroundAction): this {
    return this.addAction(backgroundAction);
  }

  /**
   * @param {SmartObject} smartObject
   */
  getSmartObject(smartObject: SmartObject): this {
    return this.addAction(smartObject);
  }

  /**
   * @description Adds a flag as a separate action.
   * @param flagParam
   */
  addFlag(flagParam: Flag): this {
    const action = new Action();
    action.addQualifier(flagParam);
    return this.addAction(action);
  }

  /**
   * @description Inject a custom function into the image transformation pipeline.
   */
  customFunction(customFunction: CustomFunctionAction) {
    return this.addAction(customFunction);
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

  // Video Actions
  // ==========================

  /**
   * Shortens a video to the specified range.
   * @param {ITrimAction} trimAction
   * @return {this}
   */
  trim(trimAction: TrimAction): this {
    return this.addAction(trimAction);
  }

  /**
   * Concatenates another video or image.
   * @param {VideoConcatenateAction} videoConcatenateAction
   * @return {this}
   */
  /*
  concatenate(videoConcatenateAction: VideoConcatenateAction): this {
    return this.addAction(videoConcatenateAction);
  }
   */

  /**
   * @description Trims pixels according to the transparency levels of a given overlay image.
   * @param {CutterAction} ctterAction
   * @return {this}
   */
  /*
  cutter(cutterAction: CutterAction): this {
    return this.addAction(cutterAction);
  }
   */

  /**
   * Adds subtitles to the video.
   * @param {SubtitlesAction} subtitlesAction
   * @return {this}
   */
  /*
  addSubtitles(subtitlesAction: SubtitlesAction): this {
    return this.addAction(subtitlesAction);
  }
   */

  /**
   * Transcodes the video (or audio) to another format.
   * @param {IAction} action
   * @return {this}
   */
  transcode(action: IAction): this {
    return this.addAction(action);
  }

  /**
   * Sets the total number of frames to sample from the original video.
   *
   * Relevant when converting videos to animated GIF or WebP format. If not specified, the resulting GIF or WebP
   * samples the whole video (up to 400 frames, at up to 10 frames per second). By default the duration of the
   * animated image is the same as the duration of the video, no matter how many frames are sampled from the original
   * video (use the delay parameter to adjust the amount of time between frames).
   *
   * @param {VideoSamplingAction} videoSamplingAction
   * @return {this}
   */
  /*
  videoSampling(videoSamplingAction: VideoSamplingAction): this {
    return this.addAction(videoSamplingAction);
  }
   */

  /**
   * Applies the specified video edit action.
   *
   * @param {IVideoEditAction} videoEditAction
   * @return {this}
   */
  /*
  videoEdit(videoEditAction: VideoEditAction): this {
    return this.addAction(videoEditAction);
  }
   */
}

export default Transformation;

