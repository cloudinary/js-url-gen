import Qualifier from "../../../../qualifier/Qualifier";

/**
 * @description Defines the visual appearance of the background.
 * @class BackgroundQualifier
 * @memberOf {Values.Background}
 * @augments {SDK.Qualifier}
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
