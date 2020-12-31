import ICloudinaryAssetConfigurations from "./ICloudinaryAssetConfigurations";
import ITagConfig from "./ITagConfig";
import IApiConfig from "./IApiConfig";

/**
 * @name ICloudinaryAssetConfigurations
 * @description
 * Defines the configuration needed for the Cloudinary Base SDK</br>
 *
 * @prop {IApiConfig} [api]
 * @prop {ITagConfig} [tag]
 * @prop {ICloudConfig} [cloud]
 * @prop {IURLConfig} [url]
 */
interface ICloudinaryConfigurations extends ICloudinaryAssetConfigurations {
  tag?: ITagConfig
  api?: IApiConfig
}

export default ICloudinaryConfigurations;
