/**
 * @summary SDK
 * @memberOf SDK
 * @description Defines an action that's a string literal, no validations or manipulations are performed
 */
import {unsupportedError} from "./utils/unsupportedError.js";
import {IToJson} from "./models/IToJson.js";

class RawAction {
  readonly raw: string;
  constructor(raw: string) {
    this.raw = raw;
  }

  toString(): string {
    return this.raw;
  }

  toJson(): IToJson{
    const error = unsupportedError(`unsupported action RawAction`);
    console.error(error);
    return {error};
  }
}

export {RawAction};
