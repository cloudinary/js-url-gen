import IAuthTokenConfig from "./IAuthTokenConfig";

interface ICloudConfig {
  cloudName?: string;
  apiKey?: string;
  apiSecret?: string;
  authToken?: IAuthTokenConfig;
}

export default ICloudConfig;
