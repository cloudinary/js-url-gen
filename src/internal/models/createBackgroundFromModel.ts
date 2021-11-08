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
import {BackgroundBorderGradientQualifier} from "../../qualifiers/background/shared/gradient/BackgroundBorderGradientQualifier.js";
import {auto, border, borderGradient, color, predominant, predominantGradient} from "../../qualifiers/background.js";
import {BackgroundAutoPredominantQualifier} from "../../qualifiers/background/shared/auto/BackgroundAutoPredominantQualifier.js";

/**
 * Create BackgroundQualifier from IBlurredBackgroundModel
 * @param backgroundModel
 */
function createBlurredBackground(backgroundModel: IBlurredBackgroundModel): BackgroundQualifier {
  const {brightness, intensity} = backgroundModel;
  const result = Background.blurred();

  if (brightness || brightness == 0) {
    result.brightness(brightness);
  }

  if (intensity || intensity == 0) {
    result.intensity(intensity);
  }

  return result;
}

/**
 * Create a gradientBackground from given model
 * @param background
 * @param backgroundModel
 */
function createGradientBackground(background: BackgroundBorderGradientQualifier, backgroundModel: IBorderGradientBackgroundModel | IPredominantGradientBackgroundModel) {
  const {gradientColors, gradientDirection, contrast, palette} = backgroundModel;

  if (contrast) {
    background.contrast();
  }

  if (palette) {
    background.palette(...palette);
  }

  if (gradientColors) {
    background.gradientColors(+gradientColors);
  }

  if (gradientDirection) {
    background.gradientDirection(gradientDirection);
  }

  return background;
}

/**
 * Crete a background with contrast and palette from given model
 * @param background
 * @param backgroundModel
 */
function createContrastPaletteBackground(background: BackgroundAutoPredominantQualifier, backgroundModel: IPredominantBackgroundModel | IBorderBackgroundModel) {
  const {contrast, palette} = backgroundModel;

  if (contrast) {
    background.contrast();
  }

  if (palette) {
    background.palette(...palette);
  }

  return background;
}

/**
 * Create BackgroundQualifier from IBackgroundModel
 * @param backgroundModel
 */
function createBackgroundFromModel(backgroundModel: IBackgroundModel): BackgroundQualifier {
  const {backgroundType} = backgroundModel;

  switch (backgroundType) {
    case 'auto':
      return auto();
    case 'blurred':
      return createBlurredBackground(backgroundModel as IBlurredBackgroundModel);
    case 'border':
      return createContrastPaletteBackground(border(), backgroundModel as IBorderBackgroundModel);
    case 'borderGradient':
      return createGradientBackground(borderGradient(), backgroundModel as IBorderGradientBackgroundModel);
    case 'predominant':
      return createContrastPaletteBackground(predominant(), backgroundModel as IPredominantBackgroundModel);
    case 'predominantGradient':
      return createGradientBackground(predominantGradient(), backgroundModel as IPredominantGradientBackgroundModel);
    default:
      return color((backgroundModel as IColorBackgroundModel).color);
  }
}

export {createBackgroundFromModel};