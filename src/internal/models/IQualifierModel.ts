export interface IQualifierModel {
  qualifierType?: string;
  [x: string]: unknown;
}

/**
 * Validates obj is an instance of IQualifierModel
 * @param obj
 */
export function isIQualifierModel(obj: unknown): obj is IQualifierModel{
  const qualifierModel = obj as IQualifierModel;
  return ('qualifierType' in qualifierModel);
}
