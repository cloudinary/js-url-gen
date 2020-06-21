import Action from "../Action";
import {IAction} from "../../interfaces/IAction";

/**
 * @implements IAction
 */
class JpegMini extends Action implements IAction {

  constructor() {
    super();
  }

  /**
   * @return {string}
   */
  toString(): string {
    return `q_jpegmini`;
  }
}

/**
 * @return {JpegMini}
 */
function jpegMini():JpegMini {
  return new JpegMini();
}

export default jpegMini;
