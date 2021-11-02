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
export {IEffectActionWithLevelModel, ISimpleEffectActionModel, IShadowEffectActionModel};
