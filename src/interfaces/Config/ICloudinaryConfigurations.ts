import IURLConfig from "./IURLConfig";
import IAccountConfig from "./IAccountConfig";
import ICloudConfig from "./ICloudConfig";

interface ICloudinaryConfigurations {
  account?: IAccountConfig,
  cloud?: ICloudConfig
  url?: IURLConfig,
}

export default ICloudinaryConfigurations;
