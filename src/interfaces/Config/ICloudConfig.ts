import IAuthTokenConfig from "./IAuthTokenConfig";

/**
 * @name ICloudConfig
 * @description Defines the global configuration applied when generating Cloudinary URLs.
 * @prop {string} [cloudName]
 * @prop {string} [apiKey]
 * @prop {string} [apiSecret]
 * @prop {IAuthTokenConfig} [authToken]
 */
interface ICloudConfig {
  cloudName?: string;
  apiKey?: string;
  apiSecret?: string;
  authToken?: IAuthTokenConfig;
}

export default ICloudConfig;
