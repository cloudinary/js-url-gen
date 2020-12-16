import {Position} from "../../../src/values/position";
import {Gravity} from "../../../src/values/gravity";
import {FocusOn} from "../../../src/values/gravity/qualifiers/focusOn/FocusOn";

/**
 * sample action used for testing
 */
function sampleFacePosition(): Position {
  return new Position().gravity(Gravity.focusOn(FocusOn.face()));
}

export {sampleFacePosition};
