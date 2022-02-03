import {ITextStyleModel} from "./ITextStyleModel.js";
import {IBaseTextSourceModel} from "./ITextSourceModel.js";

export interface ISubtitlesSourceModel extends IBaseTextSourceModel {
  textStyle?: ITextStyleModel;
  sourceType: 'subtitles';
  publicId: string;
}
