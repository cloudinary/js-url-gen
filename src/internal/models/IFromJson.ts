import {IActionModel} from "./IActionModel.js";
import {IErrorObject} from "./IErrorObject.js";

interface IFromJson extends IErrorObject{
  fromJson: (actionModel: IActionModel) => IActionModel
}

export {IFromJson};