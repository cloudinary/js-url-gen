import {pad} from "../../../src/actions/resize";
import {Action} from "../../../src/internal/Action";
import {Transformation} from "../../../src/transformation/Transformation";

/**
 * sample action used for testing
 */
function sampleTxResizePad(): Transformation {
  return new Transformation().resize(pad().width(100));
}

export {sampleTxResizePad};
