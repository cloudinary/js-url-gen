import {Position} from "../../../src/values/position";
import {Gravity} from "../../../src/values/gravity";
import {FocusOn} from "../../../src/values/focusOn";

/**
 * sample action used for testing
 */
function sampleFacePosition(): Position {
  return new Position().gravity(Gravity.focusOn(FocusOn.face()));
}

export {sampleFacePosition};
