import Qualifier from "../../../qualifier/Qualifier";
import {toFloatAsString} from "../../../utils/toFloatAsString";
import ResizeSimpleAction from "./ResizeSimpleAction";

class FillPadAction extends ResizeSimpleAction {
  constructor(width?: number|string, height?: number|string) {
    /* istanbul ignore next */
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    super('fill_pad', width, height);
  }

  aspectRatio(ratio:number|string): this {
    // toFloatAsString is used to ensure 1 turns into 1.0
    return this.addQualifier(new Qualifier('ar', toFloatAsString(ratio)));
  }
}

/**
 * @memberOf Actions.Resize
 * @description
 * Tries to prevent a "bad crop" by first attempting to use the fill mode,</br>
 * but adding padding if it is determined that more of the original image needs to be included in the final image.
 * @param {number|string} width
 * @param {number|string} height
 */
export default function fillPad(width?: string|number, height?: string|number) :FillPadAction {
  return new FillPadAction(width, height);
}
