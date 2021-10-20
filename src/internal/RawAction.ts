/**
 * @summary SDK
 * @memberOf SDK
 * @description Defines an action that's a string literal, no validations or manipulations are performed
 */
import {unsupportedError} from "./utils/unsupportedError.js";
import {IActionModel} from "./models/IActionModel.js";
import {IAction} from "./models/IAction.js";

class RawAction {
  readonly raw: string;

  constructor(raw: string) {
    this.raw = raw;
  }

  toString(): string {
    return this.raw;
  }
}

export {RawAction};
