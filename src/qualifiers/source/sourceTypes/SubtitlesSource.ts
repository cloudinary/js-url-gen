import {BaseTextSource} from "./BaseTextSource.js";
import {TextStyle} from "../../textStyle.js";
import {ISubtitlesSourceModel} from "../../../internal/models/ISubtitlesSourceModel.js";

/**
 * @memberOf Qualifiers.Source
 * @extends {Qualifiers.Source.SubtitlesSource}
 * @description Defines how to manipulate a Subtitles layer
 */
class SubtitlesSource extends BaseTextSource {
  protected type = 'subtitles'; // used within TextSource for l/u_subtitles:
  protected _qualifierModel: ISubtitlesSourceModel;

  constructor(fileName: string) {
    super(fileName);
    this._qualifierModel = {
      sourceType: 'subtitles',
      publicId: fileName
    };
  }


  /**
   * @description Set the textStyle for the subtitles layer
   * @param {TextStyle} textStyle
   */
  textStyle(textStyle: TextStyle): this {
    this._textStyle = textStyle;
    this._qualifierModel.textStyle = textStyle.toJson();

    return this;
  }

  /**
   *
   * @description Used within getOpenSourceString of TextSource, this function overwrites the default encoding behaviour
   * Subtitle file names require a different encoding than texts
   * @param text
   * @example
   * encodeText('foo/bar'); // -> foo:bar
   */
  encodeText(text:string): string {
    return text.replace(/\//g, ':');
  }
}

export {SubtitlesSource};
