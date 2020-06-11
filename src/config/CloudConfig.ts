import ICloudConfig from "../interfaces/Config/ICloudConfig";
import {ALLOWED_CLOUD_CONFIG, INVALID_TYPE_MESSAGE} from "../constants";
import Config from "./BaseConfig";



class CloudConfig extends Config implements ICloudConfig {
  cloudName?: string;
  apiKey?: string;
  apiSecret?: string;

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

  extend(cloudConfig: ICloudConfig | unknown): CloudConfig {
    this.isCloudConfigTypeGuard(cloudConfig);
    return new CloudConfig(Object.assign({}, this, cloudConfig));
  }

  isCloudConfigTypeGuard(cloudConfig:unknown): cloudConfig is ICloudConfig {
    return this.isValidConfig(cloudConfig, ALLOWED_CLOUD_CONFIG);
  }
}


export default CloudConfig;
