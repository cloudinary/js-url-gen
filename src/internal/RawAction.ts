import {IActionModel} from "./models/IActionModel.js";
import {IErrorObject} from "./models/IErrorObject.js";
import {createUnsupportedError} from "./utils/unsupportedError.js";

/**
 * @summary SDK
 * @memberOf SDK
 * @description Defines an action that's a string literal, no validations or manipulations are performed
 */

class RawAction {
  readonly raw: string;

  constructor(raw: string) {
    this.raw = raw;
  }

  toString(): string {
    return this.raw;
  }

  toJson(): IActionModel | IErrorObject{
    return {error: createUnsupportedError(`unsupported action ${this.constructor.name}`)};
  }
}

export {RawAction};
