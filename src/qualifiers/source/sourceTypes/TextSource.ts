import {BaseTextSource} from "./BaseTextSource.js";
import {TextStyle} from "../../textStyle.js";

/**
 * @memberOf Qualifiers.Source
 * @extends {Qualifiers.Source.BaseTextSource}
 * @description Defines how to manipulate a text layer
 */
class TextSource extends BaseTextSource {
  constructor(fileName: string, textStyle: TextStyle | string) {
    /* istanbul ignore next */
    super(fileName, textStyle);
  }
}

export {TextSource};
