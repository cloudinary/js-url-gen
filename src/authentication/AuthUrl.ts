import ICloudConfig from "../config/interfaces/Config/ICloudConfig.js";
import IURLConfig from "../config/interfaces/Config/IURLConfig.js";

/**
 * This class is responsible for all auth operations for the URL
 */
export class AuthUrl {
  private cloudConfig:ICloudConfig;
  private urlConfig: IURLConfig;
  private authTokenValue: string;
  private signature: string;
  private signURL: boolean;

  constructor(cloudConfig: ICloudConfig, urlConfig: IURLConfig) {
    this.cloudConfig = cloudConfig;
    this.urlConfig = urlConfig;
  }

  /**
   * Sets a flag for situations where the user explicitly wants to sign the URL
   * @param {boolean} val
   */
  sign(val: boolean): void {
    this.signURL = val;
  }

  /**
   * A boolean check against the internal signURL flag and the URLConfig.signURL property.
   */
  private shouldSign(): boolean {
    // Did we explicitly request to sign this URL?
    if (this.signURL) {
      return this.signURL;
    } else {
      // If we didn't explcitly ask to sign this URL,
      // Did we provide a config?
      if(this?.urlConfig?.signUrl) {
        return true;
      } else {
        return false;
      }
    }
  }

  /**
   * Externally sets the signature instead of calculating it internally with the API Key and Secret
   * @param {string} sig
   */
  setExplicitSignature(sig:string): void {
    this.signature = sig;
  }

  /**
   * Externally sets the authTokenValue instead of calculating it internally with the API Key and Secret
   * @param {string} authTokenValue
   */
  setExplicitAuthToken(authTokenValue:string): void {
    this.authTokenValue = authTokenValue;
  }

  /**
   * Gets the signature of the URL
   * This function returns the signature only when sign() was called and there's no authToken set.
   */
  getSignature(): string {
    if (!this.shouldSign()) { return; } // was sign() called? if not, skip this function
    if (this.cloudConfig?.authToken?.acl) { return; } // Do we have an auth token config set with acl? if so, skip this function
    if (this.authTokenValue) { return; } // Do we have an explicit authToken set? if so, skip this function

    if (this.shouldSign() && this.signature) {
      return `s--${this.signature}--`;
    } else {
      return '';
    }
  }

  /**
   * Gets the authTokenValue, or calculates the token using API Key and Secret.
   * TODO: Token calculation with Key/Secret is not yet implemented
   */
  getAuthToken(): string {
    return this.authTokenValue;
  }

  /**
   * Gets the authTokenKey of Cloudinary, can be used in cookies and URL query params
   */
  getAuthTokenKey(): string {
    return '__cld_token__';
  }
}
