import {ISourceModel} from './ISourceModel.js';
import {ITransformationModel} from "./ITransformationModel.js";

export interface IFetchSourceModel extends ISourceModel {
  qualifierType: 'FetchSource';
  sourceType: 'text';
  url: string;
  format?: string;
  transformation?: ITransformationModel;
}

/**
 * Validates that given obj is an IFetchSourceModel
 * @param obj
 */
export function isIFetchSourceModel(obj: unknown): obj is IFetchSourceModel {
  return obj && (obj as IFetchSourceModel).qualifierType === 'FetchSource';
}
