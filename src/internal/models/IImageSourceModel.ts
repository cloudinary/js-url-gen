import {ISourceModel} from "./ISourceModel.js";
import {ITransformationModel} from "./ITransformationModel.js";

export interface IImageSourceModel extends ISourceModel {
  sourceType: "image";
  publicId: string;
  transformation?: ITransformationModel;
}

/**
 * Validates that given obj is an IImageSourceModel
 * @param obj
 */
export function isIImageSourceModel(obj: unknown): obj is IImageSourceModel {
  return obj && (obj as IImageSourceModel).sourceType === 'image';
}
