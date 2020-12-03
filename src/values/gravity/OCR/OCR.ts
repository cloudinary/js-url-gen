import {GravityQualifier} from "../GravityQualifier";

/**
 * @doc
 * @memberOf Values.Gravity
 * @extends {Values.Gravity.GravityQualifier}
 */
class OCR extends GravityQualifier {
  constructor() {
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    super('ocr_text') /* istanbul ignore next */;

    this.qualifierValue.delimiter = '_';
  }

  /**
   * @doc
   * @desc Marks the OCR as avoided by the algorithm
   */
  avoid(): this {
    this.addValue('avoid');
    return this;
  }
}


export {OCR};
