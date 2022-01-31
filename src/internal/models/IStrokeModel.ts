import {IQualifierModel} from "./IQualifierModel.js";
import {IColorModel} from "./IColorModel.js";

export interface ISolidStrokeModel extends IQualifierModel{
  width: number | string;
  color: IColorModel;
}

export type IStrokeModel = boolean | ISolidStrokeModel;

/**
 * Validate that obj is an ISolidStrokeModel
 * @param obj
 */
export function isISolidStrokeModel(obj: unknown): obj is ISolidStrokeModel{
  return typeof obj === 'object' && (obj as ISolidStrokeModel).width != null && (obj as ISolidStrokeModel).color != null;
}
