import {Compass} from "../qualifiers/compass/Compass";
import {GravityQualifier} from "../GravityQualifier";

/**
 * @doc
 * @memberOf Values.Gravity
 */
class CompassGravity extends GravityQualifier {
  constructor(dir: Compass) {
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    /* istanbul ignore next */
    super(dir);
  }
}

export {CompassGravity};
