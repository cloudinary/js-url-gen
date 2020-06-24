import ICloudinaryAssetConfigurations from "./ICloudinaryAssetConfigurations";
import ITagConfig from "./ITagConfig";
import IApiConfig from "./IApiConfig";

interface ICloudinaryConfigurations extends ICloudinaryAssetConfigurations{
  tag?: ITagConfig
  api?: IApiConfig
}

export default ICloudinaryConfigurations;
