import {IAction} from "../interfaces/IAction";
import {INamedTransformationAction} from "../actions/namedTransformation/INamedTransformationAction";
import ICloudinaryConfigurations from "../interfaces/Config/ICloudinaryConfigurations";
import CloudinaryConfig from "../config/CloudinaryConfig";
import {IDescriptor} from "../interfaces/IDescriptor";
import createCloudinaryURL from "../url/cloudinaryURL";
import Param from "../parameters/Param";
import RoundCornersAction from "../actions/roundCorners/RoundCornersAction";
import BackgroundAction from "../actions/background/BackgroundAction";
import CustomFunctionAction from "../actions/customFunction/CustomFunctionAction";
import {Layer} from "../actions/overlay/Overlay";
import {Flag} from "../params/flag/Flag";
import Action from "../actions/Action";
import {TrimAction} from "../actions/videoEdit/TrimAction";
import {TranscodeAction} from "../actions/transcode/TranscodeAction";
import {FPSAction} from "../actions/transcode/FPSAction";
import {DeliveryAction} from "../actions/delivery/Delivery";
import BlurredBackgroundAction from "../actions/background/BlurredBackgroundAction";
import VariableAction from "../actions/variable/VariableAction";
import CutterAction from "../actions/cutter/CutterAction";
import BorderAction from "../actions/border/BorderAction";
import {ConditionAction} from "../actions/condition/Condition";
import ResizeSimpleAction from "../actions/resize/ResizeActions/ResizeSimpleAction";
import RotateAction from "../actions/rotate/RotateAction";
import EffectAction from "../actions/effect/EffectAction";

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
   * @param {BorderAction} borderAction
   */
  border(borderAction: BorderAction): this{
    return this.addAction(borderAction);
  }


  cutter(cutterAction: CutterAction): this {
    return this.addAction(cutterAction);
  }

  /**
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
   * @param {VariableAction} variableAction
   */
  addVariable(variableAction: VariableAction): this {
    return this.addAction(variableAction);
  }

  /**
   * @param {ConditionAction} conditionAction
   */
  ifCondition(conditionAction: ConditionAction): this {
    return this.addAction(conditionAction);
  }

  /**
   * @memberOf Actions.Condition
   * @description Specifies a transformation that is applied in the case that the initial condition is evaluated as
   * false.
   */
  ifElse(): this {
    return this.addAction(new Param('if', 'else'));
  }

  /**
   * @memberOf Actions.Condition
   * @description Finishes the conditional transformation.
   */
  endIfCondition(): this {
    return this.addAction(new Param('if', 'end'));
  }

  /**
   * @param {EffectAction} effectAction
   */
  effect(effectAction: Action): this {
    return this.addAction(effectAction);
  }

  /**
   * @param action
   */
  adjust(action: IAction): this {
    return this.addAction(action);
  }

  /**
   * @param {RotateAction} rotateAction
   */
  rotate(rotateAction: RotateAction): this {
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
  delivery(deliveryAction: DeliveryAction): this {
    return this.addAction(deliveryAction);
  }

  /**
   * @param {BackgroundAction} backgroundAction
   */
  background(backgroundAction: BackgroundAction | BlurredBackgroundAction): this {
    return this.addAction(backgroundAction);
  }

  /**
   * @param flagParam
   */
  addFlag(flagParam: Flag): this {
    const action = new Action();
    action.addParam(flagParam);
    return this.addAction(action);
  }

  /**
   *
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
   * @return this TransformableVideo with the added action
   */
  trim(trimAction: TrimAction): this {
    return this.addAction(trimAction);
  }

  /**
   * Concatenates another video or image.
   * @param {VideoConcatenateAction} videoConcatenateAction
   * @return this TransformableVideo with the added action
   */
  /*
  concatenate(videoConcatenateAction: VideoConcatenateAction): this {
    return this.addAction(videoConcatenateAction);
  }
   */

  /**
   * Applies the video as a cutter for the main video.
   * @param {CutterAction} ctterAction
   * @return this TransformableVideo with the added action
   */
  /*
  cutter(cutterAction: CutterAction): this {
    return this.addAction(cutterAction);
  }
   */

  /**
   * Adds subtitles to the video.
   * @param {SubtitlesAction} subtitlesAction
   * @return this TransformableVideo with the added action
   */
  /*
  addSubtitles(subtitlesAction: SubtitlesAction): this {
    return this.addAction(subtitlesAction);
  }
   */

  /**
   * Transcodes the video (or audio) to another format.
   * @param {TranscodeAction} transcodeAction
   * @return this TransformableVideo with the added action
   */
  transcode(transcodeAction: TranscodeAction): this {
    return this.addAction(transcodeAction);
  }


  /**
   * Controls the range of acceptable FPS (Frames Per Second) to ensure that video (even when optimized)
   * is delivered with an expected fps level (helps with sync to audio).
   * @param {FPSAction} fpsAction
   * @return this TransformableVideo with the added action
   */
  fps(fpsAction: FPSAction): this {
    return this.addAction(fpsAction);
  }

  /**
   * Explicitly sets the keyframe interval of the delivered video.
   * @param {KeyframeIntervalAction} keyframeIntervalAction
   * @return this TransformableVideo with the added action
   */
  /*
  keyframeInterval(keyframeIntervalAction: KeyframeIntervalAction): this {
    return this.addAction(keyframeIntervalAction);
  }
   */

  /**
   * Controls the video bitrate.
   * @param {BitRateAction} bitRateAction
   * @return this TransformableVideo with the added action
   */
  /*
  bitRate(bitRateAction: BitRateAction): this {
    return this.addAction(bitRateAction);
  }
   */

  /**
   * Sets the streaming profile to apply to an HLS or MPEG-DASH adaptive bitrate streaming video.
   * @param {StreamingProfileAction} streamingProfileAction
   * @return this TransformableVideo with the added action
   */
  /*
  streamingProfile(streamingProfileAction: StreamingProfileAction): this {
    return this.addAction(streamingProfileAction);
  }
   */

  /**
   * Sets the total number of frames to sample from the original video.
   *
   * Relevant when converting videos to animated GIF or WebP format. If not specified, the resulting GIF or WebP
   * samples the whole video (up to 400 frames, at up to 10 frames per second). By default the duration of the
   * animated image is the same as the duration of the video, no matter how many frames are sampled from the original
   * video (use the delay parameter to adjust the amount of time between frames).
   *
   * @param {VideoSamplingAction} videoSamplingAction
   * @return this TransformableVideo with the added action
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
   * @return this TransformableVideo with the added action
   */
  /*
  videoEdit(videoEditAction: VideoEditAction): this {
    return this.addAction(videoEditAction);
  }
   */
}

export default Transformation;

