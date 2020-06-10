interface IAccountConfig {
  provisioning_api_key?: string;
  provisioning_api_secret?: string;
  account_id?: string;
  [other:string]: unknown;
}

export default IAccountConfig;
