import {GravityQualifier} from "../GravityQualifier";

/**
 * @description The class for the OCR builder
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
   * @description Attempts to avoid the detected text in the image
   * @returns {this}
   */
  avoid(): this {
    this.addValue('avoid');
    return this;
  }
}


export {OCR};
