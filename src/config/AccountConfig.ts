import IAccountConfig from "../interfaces/Config/IAccountConfig";
import {ALLOWED_ACCOUNT_CONFIG, INVALID_TYPE_MESSAGE} from "../constants";
import Config from "./BaseConfig";

class AccountConfig extends Config implements IAccountConfig {
  provisioningApiKey?: string;
  provisioningApiSecret?: string;
  accountID?: string;
  [other:string]: unknown;

  /**
   * @param {IAccountConfig} accountConfig
   */
  constructor(accountConfig: IAccountConfig | unknown) {
    super();

    if (this.isAccountConfigTypeGuard(accountConfig)) {
      return Object.assign(this, accountConfig);
    } else {
      console.error(INVALID_TYPE_MESSAGE);
    }
  }

  extend(accountConfig: IAccountConfig | unknown): AccountConfig {
    this.isAccountConfigTypeGuard(accountConfig);
    return new AccountConfig(Object.assign({}, this, accountConfig));
  }

  isAccountConfigTypeGuard(accountConfig:unknown): accountConfig is IAccountConfig {
    return this.isValidConfig(accountConfig, ALLOWED_ACCOUNT_CONFIG);
  }
}


export default AccountConfig;
