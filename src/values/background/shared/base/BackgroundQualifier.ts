import Qualifier from "../../../../qualifier/Qualifier";

/**
 * @@doc
 * @description A class that represents a background qualifier
 * @class BackgroundQualifier
 * @augments Qualifier
 */
class BackgroundQualifier extends Qualifier {
  constructor(backgroundValue?: string) {
    // The qualifier key for this qualifier
    super('b');

    // Such as color (b_red)
    if (backgroundValue) {
      this.addValue(backgroundValue);
    }
  }
}

export {BackgroundQualifier};
