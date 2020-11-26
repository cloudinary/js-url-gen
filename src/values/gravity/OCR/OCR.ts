import {GravityQualifier} from "../GravityQualifier";

class OCR extends GravityQualifier {
  constructor() {
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    super('ocr_text') /* istanbul ignore next */;

    this.qualifierValue.delimiter = '_';
  }

  avoid(): this {
    this.addValue('avoid');
    return this;
  }
}


export {OCR};
