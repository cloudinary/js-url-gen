import ICloudConfig from "./interfaces/Config/ICloudConfig.js";
import {ALLOWED_CLOUD_CONFIG} from "../internal/internalConstants.js";
import Config from "./BaseConfig.js";

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

  /**
   * @param {string} value Sets the CloudName
   */
  setCloudName(value: string): this {
    this.cloudName = value;
    return this;
  }

  /**
   * @param {string} value Sets the API Key
   */
  setApiKey(value: string): this {
    this.apiKey = value;
    return this;
  }

  /**
   * @param {string} value Sets the API Secret
   */
  setApiSecret(value: string): this {
    this.apiSecret = value;
    return this;
  }
}

export {CloudConfig};
export default CloudConfig;
