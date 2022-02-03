import {ISourceModel} from "./ISourceModel.js";
import {ITransformationModel} from "./ITransformationModel.js";

export interface IImageSourceModel extends ISourceModel {
  sourceType: "image";
  publicId: string;
  transformation?: ITransformationModel;
}
