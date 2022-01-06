import CloudConfig from "./CloudConfig.js";
import URLConfig from "./URLConfig.js";
import ICloudinaryConfigurations from "./interfaces/Config/ICloudinaryConfigurations.js";
import ICloudConfig from "./interfaces/Config/ICloudConfig.js";
import IURLConfig from "./interfaces/Config/IURLConfig.js";

class CloudinaryConfig {
  public cloud: CloudConfig;
  public url: URLConfig;

  constructor(configurations: ICloudinaryConfigurations = {}) {
    this.cloud = new CloudConfig(configurations.cloud);
    this.url = new URLConfig(configurations.url || {});
  }

  /**
   * @description Setter for the cloudConfig
   * @param {ICloudConfig} cld
   */
  setCloudConfig(cld: ICloudConfig): this {
    this.cloud = new CloudConfig(cld);
    return this;
  }

  /**
   * @description Setter for the urlConfig
   * @param {IURLConfig} url
   */
  setURLConfig(url: IURLConfig): this {
    this.url = new URLConfig(url);
    return this;
  }

  extend(configurations: ICloudinaryConfigurations): CloudinaryConfig {
    this.cloud = this.cloud.extend(configurations.cloud || {});
    this.url = this.url.extend(configurations.url || {});

    return this;
  }
}

export default CloudinaryConfig;
