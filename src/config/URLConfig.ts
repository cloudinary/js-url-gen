import IURLConfig from "../interfaces/Config/IURLConfig";
import Config from "./BaseConfig";
import {ALLOWED_URL_CONFIG} from "../internalConstants";
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

  /**
   * @param {IURLConfig} userURLConfig
   */
  constructor(userURLConfig: IURLConfig | unknown) {
    super();
    const urlConfig = this.filterOutNonSupportedKeys(userURLConfig, ALLOWED_URL_CONFIG);
    Object.assign(this, {secure: true}, urlConfig);
  }

  extend(userURLConfig: ICloudConfig | unknown): URLConfig {
    const urlConfig = this.filterOutNonSupportedKeys(userURLConfig, ALLOWED_URL_CONFIG);
    return new URLConfig(Object.assign({}, this, urlConfig));
  }
}


export default URLConfig;
