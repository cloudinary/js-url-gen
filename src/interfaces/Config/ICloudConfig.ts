import IAuthTokenConfig from "./IAuthTokenConfig";

/**
 * @name ICloudConfig
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
