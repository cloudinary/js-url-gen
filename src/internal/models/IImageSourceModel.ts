import {ISourceModel} from "./ISourceModel.js";
import {ITransformationModel} from "./ITransformationModel.js";

export interface IImageSourceModel extends ISourceModel {
  qualifierType: "ImageSource";
  sourceType: "image";
  publicId: string;
  transformation?: ITransformationModel;
}
