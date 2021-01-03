import {BaseTextSource} from "./BaseTextSource";
import {TextStyle} from "../../textStyle";

/**
 * @memberOf Values.Source
 * @extends {Values.Source.BaseTextSource}
 * @description Defines how to manipulate a text layer
 */
class TextSource extends BaseTextSource {
  constructor(fileName: string, textStyle: TextStyle) {
    super(fileName, textStyle);
  }
}

export {TextSource};
