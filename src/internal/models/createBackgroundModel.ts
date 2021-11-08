import BlurredBackgroundAction from "../../qualifiers/background/shared/BlurredBackgroundAction.js";
import {IColorModel} from "./IColorModel.js";
import {BackgroundAutoBorderQualifier} from "../../qualifiers/background/shared/auto/BackgroundAutoBorderQualifier.js";
import {BackgroundBorderGradientQualifier} from "../../qualifiers/background/shared/gradient/BackgroundBorderGradientQualifier.js";
import {GradientDirectionType} from "../../types/types.js";
import {BackgroundColor} from "../../actions/background/actions/BackgroundColor.js";
import {BackgroundPredominantGradientQualifier} from "../../qualifiers/background/shared/gradient/BackgroundPredominantGradientQualifier.js";
import {BackgroundAutoPredominantQualifier} from "../../qualifiers/background/shared/auto/BackgroundAutoPredominantQualifier.js";

type IGradientColors = number | string;

interface IBackgroundModel {
  backgroundType: string;
}

interface IAutoBackgroundModel extends IBackgroundModel {
  backgroundType: 'auto';
}

interface IBlurredBackgroundModel extends IBackgroundModel {
  backgroundType: 'blurred';
  intensity?: number;
  brightness?: number;
}

interface IContrastPaletteBackgroundModel extends IBackgroundModel {
  contrast: boolean;
  palette: IColorModel[];
}

interface IBorderBackgroundModel extends IContrastPaletteBackgroundModel {
  backgroundType: 'border';
}

interface IBaseGradientBackgroundModel extends IContrastPaletteBackgroundModel {
  gradientColors?: IGradientColors;
  gradientDirection?: GradientDirectionType;
}

interface IBorderGradientBackgroundModel extends IBaseGradientBackgroundModel {
  backgroundType: 'borderGradient';
}

interface IColorBackgroundModel extends IBackgroundModel {
  backgroundType: 'color';
  color: IColorModel;
}

interface IPredominantBackgroundModel extends IContrastPaletteBackgroundModel {
  backgroundType: 'predominant';
}

interface IPredominantGradientBackgroundModel extends IBaseGradientBackgroundModel {
  backgroundType: 'predominantGradient';
}

/**
 * Get the value of given background
 * @param background
 */
function getBackgroundValue(background: unknown): string {
  return `${background}`.replace('b_', '');
}

/**
 * Validates that given background is an auto background
 * @param background
 */
function isAutoBackground(background: unknown): boolean {
  return getBackgroundValue(background) === 'auto';
}

/**
 * Validates that given background is a BlurredBackgroundAction
 * @param background
 */
function isBlurredBackground(background: unknown): background is BlurredBackgroundAction {
  return getBackgroundValue(background).split(':')[0] === 'blurred';
}

/**
 * Validates that given background is a BorderBackground
 * @param background
 */
function isBorderBackground(background: unknown): background is BackgroundAutoBorderQualifier {
  return background instanceof BackgroundAutoBorderQualifier;
}

/**
 * Validates that background is BackgroundBorderGradientQualifier
 * @param background
 */
function isBorderGradientBackground(background: unknown): background is BackgroundBorderGradientQualifier {
  return background instanceof BackgroundBorderGradientQualifier;
}

/**
 * Validates that background is BackgroundAutoPredominantQualifier
 * @param background
 */
function isPredominantBackground(background: unknown): background is BackgroundAutoPredominantQualifier {
  return background instanceof BackgroundAutoPredominantQualifier;
}

/**
 * Create an IAutoBackgroundModel from given background
 */
function createAutoBackgroundModel(): IAutoBackgroundModel {
  return {backgroundType: 'auto'};
}

/**
 * Create an IBlurredBackgroundModel from given background
 * @param background
 */
function createBlurredBackgroundModel(background: BlurredBackgroundAction): IBlurredBackgroundModel {
  const {
    intensityLevel,
    brightnessLevel
  } = background as unknown as { intensityLevel: number, brightnessLevel: number };

  const result: IBlurredBackgroundModel = {
    backgroundType: 'blurred'
  };

  if (intensityLevel || intensityLevel === 0) {
    result.intensity = intensityLevel;
  }

  if (brightnessLevel || brightnessLevel === 0) {
    result.brightness = brightnessLevel;
  }

  return result;
}

/**
 * Create an IContrastPaletteBackgroundModel from given background
 * @param background
 */
function createContrastPaletteBackgroundModel(background: BackgroundAutoBorderQualifier): IContrastPaletteBackgroundModel {
  const contrast = (background as unknown as { _contrast: boolean })._contrast;
  const palette: IColorModel[] = (background as unknown as { _palette: IColorModel[] })._palette;

  const result = {
    backgroundType: ''
  } as IContrastPaletteBackgroundModel;

  if (contrast) {
    result.contrast = true;
  }

  if (palette) {
    result.palette = palette;
  }

  return result;
}

/**
 * Create an IBorderBackgroundModel from given background
 * @param background
 */
function createBorderBackgroundModel(background: BackgroundAutoBorderQualifier): IBorderBackgroundModel {
  return {
    ...createContrastPaletteBackgroundModel(background),
    backgroundType: 'border'
  };
}

/**
 * Create an IBaseGradientBackgroundModel from given background
 * @param background
 */
function createBaseGradientBackgroundModel(background: BackgroundBorderGradientQualifier): IBaseGradientBackgroundModel {
  const gradientColors = (background as unknown as { _gradientColors: number })._gradientColors;
  const gradientDirection = `${(background as unknown as { _gradientDirection: GradientDirectionType })._gradientDirection}` as GradientDirectionType;
  const result = createContrastPaletteBackgroundModel(background) as unknown as IBorderGradientBackgroundModel;

  if (gradientColors) {
    result.gradientColors = gradientColors;
  }

  if (gradientDirection) {
    result.gradientDirection = gradientDirection;
  }

  return result;
}

/**
 * Create an IBorderGradientBackgroundModel from given background
 * @param background
 */
function createBorderGradientBackgroundModel(background: BackgroundBorderGradientQualifier): IBorderGradientBackgroundModel {
  return {
    ...createBaseGradientBackgroundModel(background),
    backgroundType: 'borderGradient'
  } as IBorderGradientBackgroundModel;
}

/**
 * Create an IColorBackgroundModel from given background
 * @param background
 */
function createColorBackgroundModel(background: BackgroundColor): IColorBackgroundModel {
  return {
    backgroundType: 'color',
    color: getBackgroundValue(background)
  };
}

/**
 * Create an IPredominantBackgroundModel from given background
 * @param background
 */
function createPredominantBackgroundModel(background: BackgroundAutoPredominantQualifier): IPredominantBackgroundModel {
  return {
    ...createContrastPaletteBackgroundModel(background),
    backgroundType: 'predominant'
  };
}

/**
 * Validates that background is BackgroundPredominantGradientQualifier
 * @param background
 */
function isPredominantGradientBackground(background: unknown): background is BackgroundPredominantGradientQualifier {
  return background instanceof BackgroundPredominantGradientQualifier;
}

/**
 * Create an IPredominantGradientBackgroundModel from given background
 * @param background
 */
function createPredominantGradientBackgroundModel(background: BackgroundPredominantGradientQualifier): IPredominantGradientBackgroundModel {
  return {
    ...createBaseGradientBackgroundModel(background),
    backgroundType: 'predominantGradient'
  };
}

/**
 * Create an IBackgroundModel from given background
 * @param background
 */
function createBackgroundModel(background: unknown): IBackgroundModel {
  if (isAutoBackground(background)) {
    return createAutoBackgroundModel();
  }

  if (isBlurredBackground(background)) {
    return createBlurredBackgroundModel(background);
  }

  if (isBorderBackground(background)) {
    return createBorderBackgroundModel(background);
  }

  if (isBorderGradientBackground(background)) {
    return createBorderGradientBackgroundModel(background);
  }

  if (isPredominantBackground(background)) {
    return createPredominantBackgroundModel(background);
  }

  if (isPredominantGradientBackground(background)) {
    return createPredominantGradientBackgroundModel(background);
  }

  return createColorBackgroundModel(background as BackgroundColor);
}

export {
  IAutoBackgroundModel,
  IBackgroundModel,
  IBlurredBackgroundModel,
  IBorderBackgroundModel,
  IBorderGradientBackgroundModel,
  IColorBackgroundModel,
  IPredominantBackgroundModel,
  IPredominantGradientBackgroundModel,
  createBackgroundModel
};