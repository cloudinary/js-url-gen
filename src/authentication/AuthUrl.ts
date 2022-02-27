import ICloudConfig from "../config/interfaces/Config/ICloudConfig.js";
import IURLConfig from "../config/interfaces/Config/IURLConfig.js";

/**
 * This class is responsible for all auth operations for the URL
 */
export class AuthUrl {
  private cloudConfig:ICloudConfig;
  private urlConfig: IURLConfig;
  private authToken: string;
  private signature: string;
  private _signURL: boolean;

  constructor(cloudConfig: ICloudConfig, urlConfig: IURLConfig) {
    this.cloudConfig = cloudConfig;
    this.urlConfig = urlConfig;
  }

  /**
   * Sets a flag for situations where the user explicitly wants to sign the URL (Ignoring the URL Config)
   * @param {boolean} val
   */
  signURL(val: boolean): void {
    this._signURL = val;
  }

  /**
   * A boolean check against the internal signURL flag and the URLConfig.signURL property.
   */
  shouldSign(): boolean {
    // Did we explicitly request to sign this URL?
    if (this.signURL) {
      return this._signURL;
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

  validate(): void {
    // If the user requested to sign the URL, but the signature is empty, we throw
    if (this.shouldSign()) {
      if (!this?.cloudConfig?.authTokenConfig && !this.getSignature() && !this.getAuthToken()) {
        throw 'Validation error - signURL() was called but no signature or authToken were provided';
      }
    }
  }

  /**
   * Externally sets the signature instead of calculating it internally with the API Key and Secret
   * @param {string} sig
   */
  setSignature(sig:string): void {
    this.signature = sig;
  }

  /**
   * Externally sets the authToken instead of calculating it internally with the API Key and Secret
   * @param {string} authTokenValue
   */
  setAuthToken(authTokenValue:string): void {
    this.authToken = authTokenValue;
  }

  /**
   * Gets the signature of the URL
   * This function returns the signature only when sign() was called and there's no authToken set.
   */
  getSignature(): string {
    if (!this.shouldSign()) { return; } // was sign() called? if not, skip this function
    if (this.cloudConfig?.authTokenConfig?.acl) { return; } // Do we have an auth token config set with acl? if so, skip this function
    if (this.authToken) { return; } // Do we have an explicit authToken set? if so, skip this function

    if (this.shouldSign() && this.signature) {
      return `s--${this.signature}--`;
    } else {
      return '';
    }
  }

  /**
   * Gets the authToken, or calculates the token using API Key and Secret.
   * TODO: Token calculation with Key/Secret is not yet implemented
   */
  getAuthToken(): string {
    return this.authToken;
  }

  /**
   * Gets the authTokenKey of Cloudinary, can be used in cookies and URL query params
   */
  getAuthTokenKey(): string {
    return '__cld_token__';
  }
}
