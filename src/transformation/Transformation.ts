import ICloudinaryConfigurations from "../interfaces/Config/ICloudinaryConfigurations";
import CloudinaryConfig from "../config/CloudinaryConfig";
import {IDescriptor} from "../interfaces/IDescriptor";
import createCloudinaryURL from "../url/cloudinaryURL";
import Qualifier from "../qualifier/Qualifier";
import RoundCornersAction from "../actions/roundCorners/RoundCornersAction";
import CustomFunctionAction from "../actions/customFunction/CustomFunctionAction";
import {LayerAction} from "../actions/overlay/LayerAction";
import Action from "../actions/Action";
import VariableAction from "../actions/variable/VariableAction";
import CutByImage from "../actions/reshape/CutByImage";
import BorderAction from "../actions/border/BorderAction";
import {ConditionAction} from "../actions/condition/Condition";
import ResizeSimpleAction from "../actions/resize/ResizeActions/shared/ResizeSimpleAction";
import RotateAction from "../actions/rotate/RotateAction";
import SimpleEffectAction from "../actions/effect/EffectActions/SimpleEffectAction";
import {BackgroundColor} from "../actions/background/actions/BackgroundColor";
import {NamedTransformationAction} from "../actions/namedTransformation/NamedTransformationAction";
import VolumeAction from "../actions/videoEdit/VolumeAction";
import TrimAction from "../actions/videoEdit/TrimAction";
import ConcatenateAction from "../actions/videoEdit/ConcatenateAction";
import {Outline} from "../actions/effect/outline";
import {ShadowEffectAction} from "../actions/effect/shadow";
import {AssistColorBlindEffectAction} from "../actions/effect/assistColorBlind";
import {SimulateColorBlindEffectAction} from "../actions/effect/simulateColorBlind";
import {CartoonifyEffect} from "../actions/effect/cartoonify";
import {StyleTransfer} from "../actions/effect/styleTransfer";
import {VectorizeEffectAction} from "../actions/effect/vectorize";
import {GradientFadeEffectAction} from "../actions/effect/gradientFade";
import DeliveryAction from "../actions/delivery/DeliveryAction";
import SmartObjectAction from "../actions/psdTools/SmartObjectAction";
import ClipAction from "../actions/psdTools/ClipAction";
import GetLayerAction from "../actions/psdTools/GetLayerAction";
import {IReshape} from "../actions/reshape/Reshape";
import {SystemColors} from "../values/color/Color";
import {prepareColor} from "../utils/prepareColor";
import {Extract} from "../actions/extract/Extract";
import {FlagQualifier} from "../values/flag/FlagQualifier";

declare type videoEditType = VolumeAction | TrimAction | ConcatenateAction;
declare type EffectActions =
  SimpleEffectAction
  | Outline
  | ShadowEffectAction
  | AssistColorBlindEffectAction
  | SimulateColorBlindEffectAction
  | CartoonifyEffect
  | StyleTransfer
  | VectorizeEffectAction
  | GradientFadeEffectAction


/**
 * @description - Defines how to transform an asset
 * @class Transformation
 */
class Transformation {
  actions: Action[];
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
   * @param {Action} action
   */
  addAction(action: Action): this {
    this.actions.push(action);
    return this;
  }

  /**
   * @return {string}
   */
  toString(): string {
    return this.actions
      .map((action) => {
        return action.toString();
      })
      .filter((a) => a)
      .join('/');
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

  /**
   * @description Reshape an asset
   * @doc
   * @param {IReshape} reshapeAction
   * @param {CutByImage} reshapeAction
   * @return {this}
   */
  reshape(reshapeAction: IReshape): this {
    return this.addAction( reshapeAction);
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
   * @param {LayerAction} overlayAction
   */
  overlay(overlayAction: LayerAction): this {
    overlayAction.setLayerType('l');
    return this.addAction(overlayAction);
  }

  /**
   * @description Adds an underlay under the base image.
   * @param {LayerAction} underlayAction
   */
  underlay(underlayAction: LayerAction): this {
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
    return this.addAction(new Action().addQualifier(new Qualifier('if', 'else')));
  }

  /**
   * @description Finishes the conditional transformation.
   */
  endIfCondition(): this {
    return this.addAction(new Action().addQualifier(new Qualifier('if', 'end')));
  }

  /**
   * @description Applies a filter or an effect on an asset.
   * @param {SimpleEffectAction} effectAction
   */
  effect(effectAction: EffectActions): this {
    return this.addAction(effectAction);
  }

  /**
   * @description Applies adjustment effect on an asset.
   * @param action
   */
  adjust(action: Action): this {
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
   * @param {NamedTransformation} namedTransformation
   */
  namedTransformation(namedTransformation:NamedTransformationAction ): this {
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
   * @param {Values.Color} color
   * @return {this}
   */
  backgroundColor(color: SystemColors): this {
    return this.addAction(new BackgroundColor(prepareColor(color)));
  }

  /**
   * @description Adds a layer in a Photoshop document.
   * @param action
   */
  psdTools(action: SmartObjectAction | ClipAction | GetLayerAction): this {
    return this.addAction(action);
  }

  /**
   * @doc
   * @description Adds a page or frame from a document
   * @param action
   */
  extract(action: Extract): this {
    return this.addAction(action);
  }

  /**
   * @description Adds a flag as a separate action.
   * @param {Values.Flag} flagQualifier
   */
  addFlag(flagQualifier: FlagQualifier): this {
    const action = new Action();
    action.addQualifier(flagQualifier);
    return this.addAction(action);
  }

  /**
   * @description Inject a custom function into the image transformation pipeline.
   */
  customFunction(customFunction: CustomFunctionAction): this {
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
   * @param {Action} action
   * @return {this}
   */
  transcode(action: Action): this {
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
   * @param {videoEditType} action
   * @return {this}
   */

  videoEdit(action: videoEditType): this {
    return this.addAction(action);
  }

}

export default Transformation;

