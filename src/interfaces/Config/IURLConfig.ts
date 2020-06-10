/**
 * Likely to change between different assets
 */
import IAuthTokenConfig from "./IAuthTokenConfig";

interface IURLConfig {
  force_version?: boolean;
  shorten?: boolean;
  sign_url?: boolean;
  long_url_signature?: boolean;
  use_root_path?: boolean;
  auth_token?: IAuthTokenConfig
  [other:string]: unknown;
}

export default IURLConfig;
