import {AutoFocus} from "../qualifiers/autoFocus/AutoFocus";
import {GravityQualifier} from "../GravityQualifier";

/**
 * @description The class for the autoGravity builder
 * @memberOf Values.Gravity
 * @extends {Values.Gravity.GravityQualifier}
 */
class AutoGravity extends GravityQualifier {
  constructor() {
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    /* istanbul ignore next */
    super('auto');
  }

  /**
   * @description Autofocuses on objects, allowing their priority within the algorithm to be configured.
   * @param {AutoFocus} AutoFocusObjects
   */
  autoFocus(...AutoFocusObjects: AutoFocus[]): this {
    this.addValue(AutoFocusObjects);
    return this;
  }
}


export {AutoGravity};
