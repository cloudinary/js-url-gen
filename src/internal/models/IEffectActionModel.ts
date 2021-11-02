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
export {IEffectActionWithLevelModel, ISimpleEffectActionModel, IShadowEffectActionModel, IColorizeModel, ICartoonifyEffectModel, IEffectOutlineModel};
