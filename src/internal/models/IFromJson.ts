import {IActionModel} from "./IActionModel.js";
import {Action} from "../Action.js";

interface IFromJson{
  fromJson: (actionModel: IActionModel) => Action;
}

export {IFromJson};