interface IAccountConfig {
  provisioningApiKey?: string;
  provisioningApiSecret?: string;
  accountID?: string;

  [other:string]: any;
}

export default IAccountConfig;
