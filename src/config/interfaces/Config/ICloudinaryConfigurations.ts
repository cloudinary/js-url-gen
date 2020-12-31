import ICloudinaryAssetConfiguration from "./ICloudinaryAssetConfiguration";
import ITagConfig from "./ITagConfig";
import IApiConfig from "./IApiConfig";

/**
 * @name ICloudinaryAssetConfiguration
 * @description
 * Defines the configuration needed for the Cloudinary Base SDK</br>
 *
 * @prop {IApiConfig} [api]
 * @prop {ITagConfig} [tag]
 * @prop {ICloudConfig} [cloud]
 * @prop {IURLConfig} [url]
 */
interface ICloudinaryConfigurations extends ICloudinaryAssetConfiguration {
  tag?: ITagConfig
  api?: IApiConfig
}

export default ICloudinaryConfigurations;
