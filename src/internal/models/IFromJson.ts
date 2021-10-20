import {IActionModel} from "./IActionModel.js";
import {IAction} from "./IAction.js";
import {IErrorObject} from "./IErrorObject.js";

interface IFromJson extends IErrorObject{
  fromJson: (actionModel: IActionModel) => IAction
}

export {IFromJson};