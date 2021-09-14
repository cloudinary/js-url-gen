import {GravityQualifier} from "../GravityQualifier.js";
import {CompassQualifier} from "../qualifiers/compass/CompassQualifier.js";

/**
 * @description The class for the CompassGravity builder
 * @memberOf Qualifiers.Gravity
 * @extends {Qualifiers.Gravity.GravityQualifier}
 */
class CompassGravity extends GravityQualifier {
  private type:'gravity';
  constructor(dir: CompassQualifier) {
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    /* istanbul ignore next */
    super(dir);
  }
}

export {CompassGravity};
