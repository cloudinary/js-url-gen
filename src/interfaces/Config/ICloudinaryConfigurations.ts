import IAccountConfig from "./IAccountConfig";
import ICloudinaryImageConfigurations from "./ICloudinaryImageConfigurations";

interface ICloudinaryConfigurations extends ICloudinaryImageConfigurations{
  account?: IAccountConfig
}

export default ICloudinaryConfigurations;
