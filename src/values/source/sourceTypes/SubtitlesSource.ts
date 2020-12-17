import {TextSource} from "./TextSource";
import {TextStyle} from "../../textStyle";

/**
 * @memberOf Values.Source
 * @extends {Values.Source.SubtitlesSource}
 * @description Defines how to manipulate a Subtitles layer
 */
class SubtitlesSource extends TextSource {
  protected type = 'subtitles'; // used within TextSource for l/u_subtitles:

  constructor(fileName: string, textStyle: TextStyle) {
    super(fileName, textStyle);
    this._textStyle = textStyle;
  }
}

export {SubtitlesSource};
