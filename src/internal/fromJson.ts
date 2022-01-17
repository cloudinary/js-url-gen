import {ResizeScaleAction} from "../actions/resize/ResizeScaleAction.js";
import {ResizeFitAction} from "../actions/resize/ResizeFitAction.js";
import {ResizeLimitFitAction} from "../actions/resize/ResizeLimitFitAction.js";
import {Transformation} from "../transformation/Transformation.js";
import {IActionModel} from "./models/IActionModel.js";
import {Action} from "./Action.js";
import {IErrorObject} from "./models/IErrorObject.js";
import {createUnsupportedError} from "./utils/unsupportedError.js";
import {IHasFromJson, ITransformationFromJson} from "./models/IHasFromJson.js";
import {ResizeMinimumFitAction} from "../actions/resize/ResizeMinimumFitAction.js";
import {ResizeCropAction} from "../actions/resize/ResizeCropAction.js";
import {ResizeFillAction} from "../actions/resize/ResizeFillAction.js";
import {ResizeLimitFillAction} from "../actions/resize/ResizeLimitFillAction.js";
import {ThumbResizeAction} from "../actions/resize/ThumbnailAction.js";
import {ResizePadAction} from "../actions/resize/ResizePadAction.js";
import {ResizeLimitPadAction} from "../actions/resize/ResizeLimitPadAction.js";
import {ResizeMinimumPadAction} from "../actions/resize/ResizeMinimumPadAction.js";
import {DeliveryColorSpaceAction} from "../actions/delivery/DeliveryColorSpaceAction.js";
import {DeliveryColorSpaceFromICCAction} from "../actions/delivery/DeliveryColorSpaceFromICCAction.js";
import {DeliveryFormatAction} from "../actions/delivery/DeliveryFormatAction.js";
import {DeliveryQualityAction} from "../actions/delivery/DeliveryQualityAction.js";
import {EffectActionWithLevel} from "../actions/effect/EffectActions/EffectActionWithLevel.js";
import {SimpleEffectAction} from "../actions/effect/EffectActions/SimpleEffectAction.js";
import {ShadowEffectAction} from "../actions/effect/Shadow.js";
import {ColorizeEffectAction} from "../actions/effect/Colorize.js";
import {EffectActionWithStrength} from "../actions/effect/EffectActions/EffectActionWithStrength.js";
import {CartoonifyEffect} from "../actions/effect/Cartoonify.js";
import {EffectOutline} from "../actions/effect/Outline.js";
import {BlackwhiteEffectAction} from "../actions/effect/leveled/Blackwhite.js";
import {AccelerationEffectAction} from "../actions/effect/leveled/Accelerate.js";
import {LoopEffectAction} from "../actions/effect/leveled/Loop.js";
import {MakeTransparentEffectAction} from "../actions/effect/leveled/MakeTransparent.js";
import {DitherEffectAction} from "../actions/effect/Dither.js";
import {VectorizeEffectAction} from "../actions/effect/Vectorize.js";
import {GradientFadeEffectAction} from "../actions/effect/GradientFade.js";
import {AssistColorBlindEffectAction} from "../actions/effect/AssistColorBlind.js";
import {SimulateColorBlindEffectAction} from "../actions/effect/SimulateColorBlind.js";
import {DeshakeEffectAction} from "../actions/effect/leveled/Deshake.js";
import {Pixelate} from "../actions/effect/pixelate/Pixelate.js";
import {BlurAction} from "../actions/effect/blur/Blur.js";
import {ImproveAction} from "../actions/adjust/ImproveAction.js";
import {DeliveryDPRAction} from "../actions/delivery/DeliveryDPRAction.js";
import ConcatenateAction from "../actions/videoEdit/ConcatenateAction.js";
import {ITransformationModel} from "./models/ITransformationModel.js";
import {PreviewAction} from "../actions/videoEdit/PreviewAction.js";

const ActionModelMap: Record<string, IHasFromJson> = {
  scale: ResizeScaleAction,
  fit: ResizeFitAction,
  limitFit: ResizeLimitFitAction,
  minimumFit: ResizeMinimumFitAction,
  crop: ResizeCropAction,
  fill: ResizeFillAction,
  limitFill: ResizeLimitFillAction,
  thumbnail: ThumbResizeAction,
  pad: ResizePadAction,
  limitPad: ResizeLimitPadAction,
  minimumPad: ResizeMinimumPadAction,
  colorSpace: DeliveryColorSpaceAction,
  colorSpaceFromICC: DeliveryColorSpaceFromICCAction,
  format: DeliveryFormatAction,
  quality: DeliveryQualityAction,
  sepia: EffectActionWithLevel,
  boomerang: SimpleEffectAction,
  grayscale: SimpleEffectAction,
  advancedRedEye: SimpleEffectAction,
  negate: SimpleEffectAction,
  redEye: SimpleEffectAction,
  reverse: SimpleEffectAction,
  transition: SimpleEffectAction,
  shadow: ShadowEffectAction,
  colorize: ColorizeEffectAction,
  oilPaint: EffectActionWithStrength,
  cartoonify: CartoonifyEffect,
  outline: EffectOutline,
  blackwhite: BlackwhiteEffectAction,
  accelerate: AccelerationEffectAction,
  loop: LoopEffectAction,
  makeTransparent: MakeTransparentEffectAction,
  noise: EffectActionWithLevel,
  vignette: EffectActionWithStrength,
  dither: DitherEffectAction,
  vectorize: VectorizeEffectAction,
  gradientFade: GradientFadeEffectAction,
  assistColorblind: AssistColorBlindEffectAction,
  simulateColorblind: SimulateColorBlindEffectAction,
  deshake: DeshakeEffectAction,
  pixelate: Pixelate,
  blur: BlurAction,
  improve: ImproveAction,
  unsharpMask: EffectActionWithStrength,
  saturation: EffectActionWithLevel,
  dpr: DeliveryDPRAction,
  contrast: EffectActionWithLevel,
  brightness: EffectActionWithLevel,
  gamma: EffectActionWithLevel,
  concatenate: ConcatenateAction,
  preview: PreviewAction
};

/**
 * Convert actions models to actions.
 * @throws UnsupportedError if encounters an unsupported action.
 * @param actionModels
 */
function actions(actionModels: IActionModel[]): Action[] {
  return actionModels.map((actionModel) => {
    const actionClass = (ActionModelMap[actionModel.actionType]);
    if (!actionClass) {
      throw createUnsupportedError(`unsupported action ${actionModel.actionType}`);
    }

    return actionClass.fromJson(actionModel, fromJson as unknown as ITransformationFromJson);
  });
}

/**
 * Return array of action instances represented by given action models.
 * @param transformationModel
 */
function fromJson(transformationModel: ITransformationModel ): Transformation | IErrorObject {
  try {
    // Create a new Transformation and add all actions to it
    const transformation = new Transformation();
    actions(transformationModel.actions).forEach((action)=>transformation.addAction(action));
    return transformation;
  } catch (error) {
    return {error};
  }
}

export {fromJson};
