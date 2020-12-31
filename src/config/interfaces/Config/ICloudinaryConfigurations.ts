import ICloudinaryFileConfiguration from "./ICloudinaryFileConfiguration";
import ITagConfig from "./ITagConfig";
import IApiConfig from "./IApiConfig";

/**
 * @name ICloudinaryFileConfiguration
 * @description
 * Defines the configuration needed for the Cloudinary Base SDK</br>
 *
 * @prop {IApiConfig} [api]
 * @prop {ITagConfig} [tag]
 * @prop {ICloudConfig} [cloud]
 * @prop {IURLConfig} [url]
 */
interface ICloudinaryConfigurations extends ICloudinaryFileConfiguration {
  tag?: ITagConfig
  api?: IApiConfig
}

export default ICloudinaryConfigurations;
