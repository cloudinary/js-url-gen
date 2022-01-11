import {IActionModel} from "./IActionModel.js";
import {IVideoSourceModel} from "./IVideoSourceModel.js";
import {ISourceModel} from "./ISourceModel.js";

export interface IConcatenateActionModel extends IActionModel{
  source: ISourceModel; // TODO: add and update source: IVideoSourceModel | IImageSourceModel | IFetchSourceModel
  transition?: IVideoSourceModel,
  prepend?: boolean;
  duration?: number;
}
