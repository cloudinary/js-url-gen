import {BaseTextSource} from "./BaseTextSource.js";
import {TextStyle} from "../../textStyle.js";
import {ITransformationFromJson} from "../../../internal/models/IHasFromJson.js";
import {ITextSourceModel} from "../../../internal/models/ITextSourceModel.js";
import {createTextStyleFromModel} from "../../../internal/models/createTextStyleFromModel.js";

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

  static fromJson(qualifierModel: ITextSourceModel, transformationFromJson: ITransformationFromJson): TextSource {
    const {
      text,
      textStyle,
      textColor,
      backgroundColor,
      transformation
    } = qualifierModel;

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [qualifierModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this(text, textStyle ? createTextStyleFromModel(textStyle) : undefined);
    if (transformation) {
      result.transformation(transformationFromJson(transformation));
    }

    if (textColor){
      result.textColor(textColor);
    }

    if (backgroundColor){
      result.backgroundColor(backgroundColor);
    }

    return result;
  }
}

export {TextSource};
