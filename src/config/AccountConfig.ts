import IAccountConfig from "../interfaces/Config/IAccountConfig";
import {ALLOWED_ACCOUNT_CONFIG, INVALID_TYPE_MESSAGE} from "../constants";
import Config from "./BaseConfig";

class AccountConfig extends Config implements IAccountConfig {
  provisioning_api_key?: string;
  provisioning_api_secret?: string;
  account_id?: string;
  [other:string]: unknown;

  /**
   * @param {IAccountConfig} accountConfig
   */
  constructor(accountConfig: IAccountConfig | unknown) {
    super();
    if (this.isAccountConfigTypeGuard(accountConfig)) {
      Object.assign(this, accountConfig);
    } else {
      console.error(INVALID_TYPE_MESSAGE);
    }
  }

  isAccountConfigTypeGuard(accountConfig:unknown): accountConfig is IAccountConfig {
    return this.isValidConfig(accountConfig, ALLOWED_ACCOUNT_CONFIG);
  }
}


export default AccountConfig;
