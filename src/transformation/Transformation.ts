import {IAction} from "../interfaces/IAction";
import {IBorderAction} from "../actions/border/IBorderAction";
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
import {ResizeAction} from "../actions/resize/Resize";
import BackgroundAction from "../actions/background/BackgroundAction";
import {TrimAction} from "../actions/trim/TrimAction";
import {VideoLayerAction} from "../actions/layers/VideoLayerAction";
import {VideoCutterAction} from "../actions/layers/VideoCutterAction";
import {SubtitlesAction} from "../actions/layers/SubtitlesAction";
import {VideoConcatenateAction} from "../actions/layers/VideoConcatenateAction";
import {TranscodeAction} from "../actions/transcode/TranscodeAction";
import {FPSAction} from "../actions/transcode/FPSAction";
import {KeyframeIntervalAction} from "../actions/transcode/KeyframeIntervalAction";
import {BitRateAction} from "../actions/transcode/BitRateAction";
import {StreamingProfileAction} from "../actions/transcode/StreamingProfileAction";
import {VideoSamplingAction} from "../actions/transcode/VideoSamplingAction";
import {VideoEditAction} from "../actions/transcode/VideoEditAction";

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
  overlay(overlayAction: ILayerAction): this {
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
   * Adds another video, text or image as an overlay over the container video.
   * @param {IVideoLayerAction} videoLayerAction
   * @return this TransformableVideo with the added action
   */
  videoOverlay(videoLayerAction: VideoLayerAction): this {
    return this.addAction(videoLayerAction);
  }

  /**
   * Concatenates another video or image.
   * @param {IVideoConcatenateAction} videoConcatenateAction
   * @return this TransformableVideo with the added action
   */
  concatenate(videoConcatenateAction: VideoConcatenateAction): this {
    return this.addAction(videoConcatenateAction);
  }

  /**
   * Applies the video as a cutter for the main video.
   * @param {IVideoCutterAction} videoCutterAction
   * @return this TransformableVideo with the added action
   */
  cutter(videoCutterAction: VideoCutterAction): this {
    return this.addAction(videoCutterAction);
  }

  /**
   * Adds subtitles to the video.
   * @param {ISubtitlesAction} subtitlesAction
   * @return this TransformableVideo with the added action
   */
  addSubtitles(subtitlesAction: SubtitlesAction): this {
    return this.addAction(subtitlesAction);
  }

  /**
   * Transcodes the video (or audio) to another format.
   * @param {ITranscodeAction} transcodeAction
   * @return this TransformableVideo with the added action
   */
  transcode(transcodeAction: TranscodeAction): this {
    return this.addAction(transcodeAction);
  }


  /**
   * Controls the range of acceptable FPS (Frames Per Second) to ensure that video (even when optimized)
   * is delivered with an expected fps level (helps with sync to audio).
   * @param {IFPSAction} fpsAction
   * @return this TransformableVideo with the added action
   */
  fps(fpsAction: FPSAction): this {
    return this.addAction(fpsAction);
  }

  /**
   * Explicitly sets the keyframe interval of the delivered video.
   * @param {keyframeIntervalAction} keyframeIntervalAction
   * @return this TransformableVideo with the added action
   */
  keyframeInterval(keyframeIntervalAction: KeyframeIntervalAction): this {
    return this.addAction(keyframeIntervalAction);
  }

  /**
   * Controls the video bitrate.
   * @param {IBitRateAction} bitRateAction
   * @return this TransformableVideo with the added action
   */
  bitRate(bitRateAction: BitRateAction): this {
    return this.addAction(bitRateAction);
  }

  /**
   * Sets the streaming profile to apply to an HLS or MPEG-DASH adaptive bitrate streaming video.
   * @param {IStreamingProfileAction} streamingProfileAction
   * @return this TransformableVideo with the added action
   */
  streamingProfile(streamingProfileAction: StreamingProfileAction): this {
    return this.addAction(streamingProfileAction);
  }

  /**
   * Sets the total number of frames to sample from the original video.
   *
   * Relevant when converting videos to animated GIF or WebP format. If not specified, the resulting GIF or WebP
   * samples the whole video (up to 400 frames, at up to 10 frames per second). By default the duration of the
   * animated image is the same as the duration of the video, no matter how many frames are sampled from the original
   * video (use the delay parameter to adjust the amount of time between frames).
   *
   * @param {IVideoSamplingAction} videoSamplingAction
   * @return this TransformableVideo with the added action
   */
  videoSampling(videoSamplingAction: VideoSamplingAction): this {
    return this.addAction(videoSamplingAction);
  }

  /**
   * Applies the specified video edit action.
   *
   * @param {IVideoEditAction} videoEditAction
   * @return this TransformableVideo with the added action
   */
  videoEdit(videoEditAction: VideoEditAction): this {
    return this.addAction(videoEditAction);
  }
}

export default Transformation;
