import IURLConfig from "../interfaces/Config/IURLConfig";
import Config from "./BaseConfig.js";
import {ALLOWED_URL_CONFIG, INVALID_TYPE_MESSAGE} from "../constants";
import IAuthTokenConfig from "../interfaces/Config/IAuthTokenConfig";

class URLConfig extends Config implements IURLConfig {
  force_version?: boolean;
  shorten?: boolean;
  sign_url?: boolean;
  long_url_signature?: boolean;
  use_root_path?: boolean;
  auth_token?: IAuthTokenConfig;
  [other:string]: unknown;

  /**
   * @param {IURLConfig} urlConfig
   */
  constructor(urlConfig: IURLConfig | unknown) {
    super();
    if (this.isUrlConfigTypeGuard(urlConfig)) {
      Object.assign(this, urlConfig);
    } else {
      console.error(INVALID_TYPE_MESSAGE);
    }
  }

  isUrlConfigTypeGuard(urlConfig:unknown): urlConfig is IURLConfig {
    return this.isValidConfig(urlConfig, ALLOWED_URL_CONFIG);
  }
}


export default URLConfig;
