import {IActionModel} from "./IActionModel.js";
import {Action} from "../Action.js";
import {Transformation} from "../../transformation/Transformation.js";

export type ITransformationFromJson = (actionModels: IActionModel[]) => Transformation;

export interface IHasFromJson {
  fromJson: (actionModel: IActionModel, transformationFromJson?: ITransformationFromJson) => Action;
}
