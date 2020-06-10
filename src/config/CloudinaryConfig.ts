import AccountConfig from "./AccountConfig";
import CloudConfig from "./CloudConfig";
import URLConfig from "./URLConfig";
import ICloudinaryConfigurations from "../interfaces/Config/ICloudinaryConfigurations";

class CloudinaryConfig {
  public readonly account: AccountConfig;
  public readonly cloud: CloudConfig;
  public readonly url: URLConfig;
  constructor(configurations: ICloudinaryConfigurations) {
    this.account = new AccountConfig(configurations.account || {});
    this.cloud = new CloudConfig(configurations.cloud || {});
    this.url = new URLConfig( configurations.url || {});
  }
}


export default CloudinaryConfig;
