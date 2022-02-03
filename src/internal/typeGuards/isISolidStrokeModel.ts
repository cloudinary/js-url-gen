import {ISolidStrokeModel} from "../models/IStrokeModel.js";

/**
 * Validate that obj is an ISolidStrokeModel
 * @param obj
 */
export function isISolidStrokeModel(obj: unknown): obj is ISolidStrokeModel{
  return typeof obj === 'object' && (obj as ISolidStrokeModel).width != null && (obj as ISolidStrokeModel).color != null;
}
