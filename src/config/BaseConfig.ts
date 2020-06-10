import ICloudConfig from "../interfaces/Config/ICloudConfig";
import {INVALID_TYPE_MESSAGE} from "../constants";

class Config {
  /**
   * Type guard for user config input
   * @param {any} object User provided input of unknown shape
   * @param {string[]} validKeys Array of valid configuration keys
   * @return {boolean} Whether an object is a valid configuration object
   */
  isValidConfig(object:unknown, validKeys:string[]): object is ICloudConfig {
    if (typeof object !== 'object' || object instanceof Array) {
      return false;
    }

    Object.keys(object).forEach((key) => {
      if (validKeys.indexOf(key) === -1) {
        console.error(`${INVALID_TYPE_MESSAGE}: ${key}`);
      }
    });
    return true;
  }
}


export default Config;
