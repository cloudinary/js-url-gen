import {IActionModel} from "./IActionModel.js";

interface IEffectActionWithLevelModel extends IActionModel{
  level?: number;
}

interface ISimpleEffectActionModel extends IActionModel{

}

interface IShadowEffectActionModel extends IActionModel{
  strength?: number;
  offsetX?: string|number;
  offsetY?: string|number;
  color?: string
}

interface IColorizeModel extends IActionModel{
  level?: number;
  color?: string;
}

interface ICartoonifyEffectModel extends IActionModel{
  lineStrength?: number;
  blackAndWhite?: boolean;
  colorReductionLevel?: number;
}

interface IEffectOutlineModel extends IActionModel{
  mode?: string;
  color?: string;
  width?: number;
  blurLevel?: number;
}

interface IMakeTransparentEffectModel extends IActionModel{
  tolerance?: number;
  color?: string;
}
interface IDitherModel extends IActionModel {
  type?: number;
}
interface IVectorizeEffectModel extends IActionModel{
  numOfColors?: number;
  detailLevel?: number;
  despeckleLevel?: number;
  paths?: number;
  cornersLevel?: number;
}

interface IGradientFadeEffecModel extends IActionModel{
  strength?: number;
  type?: string;
  verticalStartPoint?: string;
  horizontalStartPoint?: string;
}

interface IAssistColorBlindEffectModel extends IActionModel{
  type?: string;
}

interface ISimulateColorBlindEffectModel extends IActionModel{
  condition?: string;
}

interface IDeshakeEffectModel extends IActionModel{
  pixels?: number;
}

interface IPixelateModel extends IActionModel{
  squareSize?: number;
  region?: {RegionType?: string};
}

interface IBlurModel extends IActionModel{
  strength?: number;
  region?: {RegionType?: string};
}

export {
  IEffectActionWithLevelModel,
  ISimpleEffectActionModel,
  IShadowEffectActionModel,
  IColorizeModel,
  ICartoonifyEffectModel,
  IEffectOutlineModel,
  IMakeTransparentEffectModel,
  IDitherModel,
  IVectorizeEffectModel,
  IGradientFadeEffecModel,
  IAssistColorBlindEffectModel,
  ISimulateColorBlindEffectModel,
  IDeshakeEffectModel,
  IPixelateModel,
  IBlurModel
};
