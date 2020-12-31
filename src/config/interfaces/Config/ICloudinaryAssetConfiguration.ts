import IURLConfig from "./IURLConfig";
import ICloudConfig from "./ICloudConfig";

/**
 * @name ICloudinaryAssetConfiguration
 * @description
 * Defines the configuration needed to create URLs for cloudinary assets
 *
 * @prop {ICloudConfig} cloud
 * @prop {IURLConfig} url
 */
interface ICloudinaryAssetConfiguration {
  cloud?: ICloudConfig
  url?: IURLConfig,
}

export default ICloudinaryAssetConfiguration;
