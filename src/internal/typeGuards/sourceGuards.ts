import {IFetchSourceModel} from "../models/IFetchSourceModel.js";
import {IImageSourceModel} from "../models/IImageSourceModel.js";
import {ISubtitlesSourceModel} from "../models/ISubtitlesSourceModel.js";
import {ITextSourceModel} from "../models/ITextSourceModel.js";

/**
 * Validates that given obj is an IFetchSourceModel
 * @param obj
 */
export function isIFetchSourceModel(obj: unknown): obj is IFetchSourceModel {
  return obj && (obj as IFetchSourceModel).sourceType === 'fetch';
}

/**
 * Validates that given obj is an IImageSourceModel
 * @param obj
 */
export function isIImageSourceModel(obj: unknown): obj is IImageSourceModel {
  return obj && (obj as IImageSourceModel).sourceType === 'image';
}

/**
 * Validates that given obj is an ISubtitlesSourceModel
 * @param obj
 */
export function isISubtitlesSourceModel(obj: unknown): obj is ISubtitlesSourceModel {
  return obj && (obj as ISubtitlesSourceModel).sourceType === 'subtitles';
}

/**
 * Validates that given obj is an isITextSourceModel
 * @param obj
 */
export function isITextSourceModel(obj: unknown): obj is ITextSourceModel {
  return obj && (obj as ITextSourceModel).sourceType === 'text';
}
