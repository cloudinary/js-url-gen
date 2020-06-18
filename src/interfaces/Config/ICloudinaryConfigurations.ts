import IAccountConfig from "./IAccountConfig";
import ICloudinaryAssetConfigurations from "./ICloudinaryAssetConfigurations";
import ITagConfig from "./ITagConfig";
import IApiConfig from "./IApiConfig";

interface ICloudinaryConfigurations extends ICloudinaryAssetConfigurations{
  account?: IAccountConfig
  tag?: ITagConfig
  api?: IApiConfig
}

export default ICloudinaryConfigurations;
