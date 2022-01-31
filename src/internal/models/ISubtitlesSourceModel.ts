import {ITextStyleModel} from "./ITextStyleModel.js";
import {IBaseTextSourceModel} from "./ITextSourceModel.js";

export interface ISubtitlesSourceModel extends IBaseTextSourceModel {
  textStyle?: ITextStyleModel;
  sourceType: 'subtitles';
  publicId: string;
}

/**
 * Validates that given obj is an IImageSourceModel
 * @param obj
 */
export function isISubtitlesSourceModel(obj: unknown): obj is ISubtitlesSourceModel {
  return obj && (obj as ISubtitlesSourceModel).sourceType === 'subtitles';
}
