interface IAccountConfig {
  provisioningApiKey?: string;
  provisioningApiSecret?: string;
  accountID?: string;

  [other:string]: string | boolean | number;
}

export default IAccountConfig;
