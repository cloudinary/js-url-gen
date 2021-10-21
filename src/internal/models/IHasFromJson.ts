import {IActionModel} from "./IActionModel.js";
import {Action} from "../Action.js";

interface IHasFromJson {
  fromJson: (actionModel: IActionModel) => Action;
}

export {IHasFromJson};