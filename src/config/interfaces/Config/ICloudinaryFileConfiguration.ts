import IURLConfig from "./IURLConfig";
import ICloudConfig from "./ICloudConfig";

/**
 * @name ICloudinaryFileConfiguration
 * @description
 * Defines the configuration needed to create URLs for cloudinary assets
 *
 * @prop {ICloudConfig} cloud
 * @prop {IURLConfig} url
 */
interface ICloudinaryFileConfiguration {
  cloud?: ICloudConfig
  url?: IURLConfig,
}

export default ICloudinaryFileConfiguration;
