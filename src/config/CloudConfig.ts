import ICloudConfig from "../interfaces/Config/ICloudConfig";
import {ALLOWED_CLOUD_CONFIG} from "../internalConstants";
import Config from "./BaseConfig";

class CloudConfig extends Config implements ICloudConfig {
  cloudName?: string;
  apiKey?: string;
  apiSecret?: string;

  /**
   * @param {ICloudConfig} userCloudConfig {@link ICloudConfig}
   *
   */
  constructor(userCloudConfig: ICloudConfig) {
    super();
    const cloudConfig = this.filterOutNonSupportedKeys(userCloudConfig, ALLOWED_CLOUD_CONFIG);
    Object.assign(this, cloudConfig);

    if (!this.cloudName) {
      throw 'Missing mandatory field cloudName';
    }
  }

  extend(userCloudConfig: ICloudConfig): CloudConfig {
    const cloudConfig = this.filterOutNonSupportedKeys(userCloudConfig, ALLOWED_CLOUD_CONFIG);
    return new CloudConfig(Object.assign({}, this, cloudConfig));
  }
}


export default CloudConfig;
