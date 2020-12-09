import Qualifier from "../qualifier/Qualifier";
import RoundCornersAction from "../actions/roundCorners/RoundCornersAction";
import CustomFunctionAction from "../actions/customFunction/CustomFunctionAction";
import {LayerAction} from "../actions/overlay/LayerAction";
import Action from "../actions/Action";
import VariableAction from "../actions/variable/VariableAction";
import {ConditionAction} from "../actions/condition/Condition";
import ResizeSimpleAction from "../actions/resize/ResizeActions/shared/ResizeSimpleAction";
import RotateAction from "../actions/rotate/RotateAction";
import {BackgroundColor} from "../actions/background/actions/BackgroundColor";
import {NamedTransformationAction} from "../actions/namedTransformation/NamedTransformationAction";
import DeliveryAction from "../actions/delivery/DeliveryAction";
import SmartObjectAction from "../actions/psdTools/SmartObjectAction";
import ClipAction from "../actions/psdTools/ClipAction";
import GetLayerAction from "../actions/psdTools/GetLayerAction";
import {IReshape} from "../actions/reshape/Reshape";
import {SystemColors} from "../values/color/Color";
import {prepareColor} from "../utils/prepareColor";
import {Extract} from "../actions/extract/Extract";
import {Border} from "../actions/border/Border";
import {FlagQualifier} from "../values/flag/FlagQualifier";
import {EffectActions} from "../actions/effect/Effect";
import {videoEditType} from "../actions/videoEdit/VideoEdit";

/**
 * @description - Defines how to transform an asset
 * @memberOf SDK
 */
class Transformation {
  actions: Action[];

  constructor() {
    this.actions = [];
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
   * @description Adds a border around the image.
   * @param {Border} borderAction
   * @return {this}
   */
  border(borderAction: Border): this{
    return this.addAction(borderAction);
  }

  /**
   * @description Reshape an asset
   * @doc
   * @param {IReshape} reshapeAction
   * @return {this}
   */
  reshape(reshapeAction: IReshape): this {
    return this.addAction( reshapeAction);
  }

  /**
   * @description Resize the asset using provided resize action
   * @param {ResizeSimpleAction} resizeAction
   * @return {this}
   */
  resize(resizeAction: ResizeSimpleAction): this {
    return this.addAction(resizeAction);
  }

  /**
   * @param {DeliveryAction} quality
   * @return {this}
   */
  quality(quality: DeliveryAction): this {
    return this.addAction(quality);
  }

  /**
   * @description Rounds the specified corners of an image.
   * @param roundCornersAction
   * @return {this}
   */
  roundCorners(roundCornersAction: RoundCornersAction): this {
    return this.addAction(roundCornersAction);
  }

  /**
   * @description Adds an overlay over the base image.
   * @param {LayerAction} overlayAction
   * @return {this}
   */
  overlay(overlayAction: LayerAction): this {
    overlayAction.setLayerType('l');
    return this.addAction(overlayAction);
  }

  /**
   * @description Adds an underlay under the base image.
   * @param {LayerAction} underlayAction
   * @return {this}
   */
  underlay(underlayAction: LayerAction): this {
    underlayAction.setLayerType('u');
    return this.addAction(underlayAction);
  }

  /**
   * @description Defines an new user variable.
   * @param {VariableAction} variableAction
   * @return {this}
   */
  addVariable(variableAction: VariableAction): this {
    return this.addAction(variableAction);
  }

  /**
   * @description Specifies a condition to be met before applying a transformation.
   * @param {ConditionAction} conditionAction
   * @return {this}
   */
  ifCondition(conditionAction: ConditionAction): this {
    return this.addAction(conditionAction);
  }

  /**
   * @description Specifies a transformation that is applied in the case that the initial condition is evaluated as
   * false.
   * @return {this}
   */
  ifElse(): this {
    return this.addAction(new Action().addQualifier(new Qualifier('if', 'else')));
  }

  /**
   * @description Finishes the conditional transformation.
   * @return {this}
   */
  endIfCondition(): this {
    return this.addAction(new Action().addQualifier(new Qualifier('if', 'end')));
  }

  /**
   * @description Applies a filter or an effect on an asset.
   * @param {SimpleEffectAction} effectAction
   * @return {this}
   */
  effect(effectAction: EffectActions): this {
    return this.addAction(effectAction);
  }

  /**
   * @description Applies adjustment effect on an asset.
   * @param action
   * @return {this}
   */
  adjust(action: Action): this {
    return this.addAction(action);
  }

  /**
   * @description Rotates the asset by the given angle.
   * @param {RotateAction} rotateAction
   * @return {this}
   */
  rotate(rotateAction: RotateAction): this {
    return this.addAction(rotateAction);
  }

  /**
   * @description Applies a pre-defined named transformation of the given name.
   * @param {NamedTransformation} namedTransformation
   * @return {this}
   */
  namedTransformation(namedTransformation:NamedTransformationAction ): this {
    return this.addAction(namedTransformation);
  }

  /**
   * @description Applies delivery action.
   * @param deliveryAction
   * @return {this}
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
   * @return {this}
   */
  psdTools(action: SmartObjectAction | ClipAction | GetLayerAction): this {
    return this.addAction(action);
  }

  /**
   * @doc
   * @description Adds a page or frame from a document
   * @param action
   * @return {this}
   */
  extract(action: Extract): this {
    return this.addAction(action);
  }

  /**
   * @description Adds a flag as a separate action.
   * @param {Values.Flag} flagQualifier
   * @return {this}
   */
  addFlag(flagQualifier: FlagQualifier): this {
    const action = new Action();
    action.addQualifier(flagQualifier);
    return this.addAction(action);
  }

  /**
   * @description Inject a custom function into the image transformation pipeline.
   * @return {this}
   */
  customFunction(customFunction: CustomFunctionAction): this {
    return this.addAction(customFunction);
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

export {Transformation};

