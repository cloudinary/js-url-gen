import CloudConfig from "./CloudConfig";
import URLConfig from "./URLConfig";
import ICloudinaryConfigurations from "./interfaces/Config/ICloudinaryConfigurations";

class CloudinaryConfig {
  public cloud: CloudConfig;
  public url: URLConfig;

  constructor(configurations: ICloudinaryConfigurations = {}) {
    this.cloud = new CloudConfig(configurations.cloud);
    this.url = new URLConfig(configurations.url || {});
  }

  extend(configurations: ICloudinaryConfigurations): CloudinaryConfig {
    this.cloud = this.cloud.extend(configurations.cloud || {});
    this.url = this.url.extend(configurations.url || {});

    return this;
  }
}


export default CloudinaryConfig;
