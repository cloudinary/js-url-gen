import {Position} from "../../../src/qualifiers/position";
import {Gravity} from "../../../src/qualifiers/gravity";
import {FocusOn} from "../../../src/qualifiers/focusOn";

/**
 * sample action used for testing
 */
function sampleFacePosition(): Position {
  return new Position().gravity(Gravity.focusOn(FocusOn.face()));
}

export {sampleFacePosition};
