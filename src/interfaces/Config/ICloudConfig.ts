interface ICloudConfig {
  cloudName?: string;
  apiKey?: string;
  apiSecret?: string;

  [other:string]: unknown;
}

export default ICloudConfig;
