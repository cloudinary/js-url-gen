import ICloudConfig from "../interfaces/Config/ICloudConfig";
import {ALLOWED_CLOUD_CONFIG, INVALID_TYPE_MESSAGE} from "../constants";
import Config from "./BaseConfig";

class CloudConfig extends Config implements ICloudConfig {
  cloud_name?: string;
  secure_distribution?: boolean;
  api_key?: string;
  api_secret?: string;
  private_cdn?: boolean;
  cdn_subdomain?: boolean;
  secure_cdn_subdomain?: boolean;
  cname?: string;
  ssl_detected?: boolean;
  secure?: boolean;
  [other:string]: unknown;

  /**
   * @param {ICloudConfig} cloudConfig
   */
  constructor(cloudConfig: ICloudConfig | unknown) {
    super();
    if (this.isCloudConfigTypeGuard(cloudConfig)) {
      Object.assign(this, cloudConfig);
    } else {
      console.error(INVALID_TYPE_MESSAGE);
    }
  }

  isCloudConfigTypeGuard(cloudConfig:unknown): cloudConfig is ICloudConfig {
    return this.isValidConfig(cloudConfig, ALLOWED_CLOUD_CONFIG);
  }
}


export default CloudConfig;
