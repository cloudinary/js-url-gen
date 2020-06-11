interface IAccountConfig {
  provisioningApiKey?: string;
  provisioningApiSecret?: string;
  accountID?: string;

  [other:string]: unknown;
}

export default IAccountConfig;
