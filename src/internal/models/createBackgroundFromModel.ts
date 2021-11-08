import {BackgroundQualifier} from "../../qualifiers/background/shared/base/BackgroundQualifier.js";
import {
  IBackgroundModel,
  IBlurredBackgroundModel,
  IBorderBackgroundModel,
  IBorderGradientBackgroundModel,
  IColorBackgroundModel,
  IPredominantBackgroundModel,
  IPredominantGradientBackgroundModel
} from "./createBackgroundModel.js";
import {Background} from "../../qualifiers.js";

/**
 * Create BackgroundQualifier from IBlurredBackgroundModel
 * @param backgroundModel
 */
function createBlurredBackground(backgroundModel: IBlurredBackgroundModel): BackgroundQualifier {
  const {brightness, intensity} = backgroundModel;
  const result = Background.blurred();

  if (brightness || brightness == 0){
    result.brightness(brightness);
  }

  if (intensity || intensity == 0){
    result.intensity(intensity);
  }

  return result;
}

/**
 * Create BackgroundQualifier from IBorderBackgroundModel
 * @param backgroundModel
 */
function createBorderBackground(backgroundModel: IBorderBackgroundModel): BackgroundQualifier {
  const {contrast, palette} = backgroundModel;
  const result = Background.border();

  if (contrast){
    result.contrast();
  }

  if(palette){
    result.palette(...palette);
  }

  return result;
}

/**
 * Create BackgroundQualifier from IBorderGradientBackgroundModel
 * @param backgroundModel
 */
function createBorderGradientBackground(backgroundModel: IBorderGradientBackgroundModel): BackgroundQualifier {
  const {gradientColors, gradientDirection, contrast, palette} = backgroundModel;
  const result = Background.borderGradient();

  if (contrast){
    result.contrast();
  }

  if(palette){
    result.palette(...palette);
  }

  if (gradientColors){
    result.gradientColors(+gradientColors);
  }

  if (gradientDirection){
    result.gradientDirection(gradientDirection);
  }

  return result;
}

/**
 * Create BackgroundQualifier from IPredominantBackgroundModel
 * @param backgroundModel
 */
function createPredominantBackground(backgroundModel: IPredominantBackgroundModel): BackgroundQualifier {
  const {contrast, palette} = backgroundModel;
  const result = Background.predominant();

  if (contrast){
    result.contrast();
  }

  if(palette){
    result.palette(...palette);
  }

  return result;
}

/**
 * Create BackgroundQualifier from IPredominantGradientBackgroundModel
 * @param backgroundModel
 */
function createPredominantGradientBackground(backgroundModel: IPredominantGradientBackgroundModel): BackgroundQualifier {
  const {gradientColors, gradientDirection, contrast, palette} = backgroundModel;
  const result = Background.predominantGradient();

  if (contrast){
    result.contrast();
  }

  if(palette){
    result.palette(...palette);
  }

  if (gradientColors){
    result.gradientColors(+gradientColors);
  }

  if (gradientDirection){
    result.gradientDirection(gradientDirection);
  }

  return result;
}

/**
 * Create BackgroundQualifier from IColorBackgroundModel
 * @param backgroundModel
 */
function createColorBackground(backgroundModel: IColorBackgroundModel): BackgroundQualifier {
  return Background.color(backgroundModel.color);
}

/**
 * Create BackgroundQualifier from IBackgroundModel
 * @param backgroundModel
 */
function createBackgroundFromModel(backgroundModel: IBackgroundModel): BackgroundQualifier {
  const {backgroundType} = backgroundModel;

  switch (backgroundType){
    case 'auto':
      return Background.auto();
    case 'blurred':
      return createBlurredBackground(backgroundModel as IBlurredBackgroundModel);
    case 'border':
      return createBorderBackground(backgroundModel as IBorderBackgroundModel);
    case 'borderGradient':
      return createBorderGradientBackground(backgroundModel as IBorderGradientBackgroundModel);
    case 'predominant':
      return createPredominantBackground(backgroundModel as IPredominantBackgroundModel);
    case 'predominantGradient':
      return createPredominantGradientBackground(backgroundModel as IPredominantGradientBackgroundModel);
    default:
      return createColorBackground(backgroundModel as IColorBackgroundModel);
  }
}

export {createBackgroundFromModel};