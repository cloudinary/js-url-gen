import IURLConfig from "../interfaces/Config/IURLConfig";
import Config from "./BaseConfig";
import {ALLOWED_URL_CONFIG, INVALID_TYPE_MESSAGE} from "../constants";
import IAuthTokenConfig from "../interfaces/Config/IAuthTokenConfig";
import ICloudConfig from "../interfaces/Config/ICloudConfig";

class URLConfig extends Config implements IURLConfig {
  cdnSubdomain?: boolean;
  secureCdnSubdomain?: boolean;
  cname?: string; // User subdomain (example.cloudinary.com)
  secureDistribution?: boolean;
  privateCdn?: boolean;
  signUrl?: boolean;
  longUrlSignature?: boolean;
  shorten?: boolean;
  useRootPath?: boolean;
  secure?: boolean;
  forceVersion?: boolean;

  [other:string] : unknown;

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

  extend(urlConfig: ICloudConfig | unknown): URLConfig {
    this.isUrlConfigTypeGuard(urlConfig);
    return new URLConfig(Object.assign({}, this, urlConfig));
  }

  isUrlConfigTypeGuard(urlConfig:unknown): urlConfig is IURLConfig {
    return this.isValidConfig(urlConfig, ALLOWED_URL_CONFIG);
  }
}


export default URLConfig;
