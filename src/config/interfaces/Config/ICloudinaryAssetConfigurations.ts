import IURLConfig from "./IURLConfig";
import ICloudConfig from "./ICloudConfig";

/**
 * @name ICloudinaryAssetConfigurations
 * @summary config
 * @description
 * Defines the configuration needed to create URLs for cloudinary assets
 *
 * @prop {ICloudConfig} cloud
 * @prop {IURLConfig} url
 */
interface ICloudinaryAssetConfigurations {
  cloud?: ICloudConfig
  url?: IURLConfig,
}

export default ICloudinaryAssetConfigurations;
