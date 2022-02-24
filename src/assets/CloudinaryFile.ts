import {
  getUrlPrefix,
  getUrlVersion,
  handleAssetType,
  handleDeliveryType
} from "../internal/url/cloudinaryURL.js";
import {Transformation} from "../transformation/Transformation.js";
import ICloudConfig from "../config/interfaces/Config/ICloudConfig.js";
import IURLConfig from "../config/interfaces/Config/IURLConfig.js";
import IAuthTokenConfig from "../config/interfaces/Config/IAuthTokenConfig.js";
import URLConfig from "../config/URLConfig.js";
import {getSDKAnalyticsSignature} from "../sdkAnalytics/getSDKAnalyticsSignature.js";
import {ITrackedPropertiesThroughAnalytics} from "../sdkAnalytics/interfaces/ITrackedPropertiesThroughAnalytics.js";

/**
 * This const contains all the valid combination of asset/delivery for URL shortening purposes
 * It's exported because it's used in a test, but it's not really shared enough to belong in a separate file
 */
export const SEO_TYPES: Record<string, string> = {
  "image/upload": "images",
  "image/private": "private_images",
  "image/authenticated": "authenticated_images",
  "raw/upload": "files",
  "video/upload": "videos"
};

/**
 * Supported delivery type options.
 */
type DELIVERY_TYPE =
  'key'|
  'upload'|
  'private_delivery'|
  'public_delivery'|
  'authenticated'|
  'fetch'|
  'sprite'|
  'text'|
  'multi'|
  'facebook'|
  'twitter'|
  'twitter_name'|
  'gravatar'|
  'youtube'|
  'hulu'|
  'vimeo'|
  'animoto'|
  'worldstarhiphop'|
  'dailymotion';

/**
 * @description Cloudinary file without a transformation
 * @summary SDK
 * @memberOf SDK
 */
class CloudinaryFile {
  protected assetType: string; // resourceType image/video, determined by the asset type
  protected cloudName: string; // populated from the cloud config
  protected apiKey: string; // populated from  the cloud config
  protected apiSecret: string; // populated from the cloud config
  protected authToken: IAuthTokenConfig; // The configuration describing the authToken, used in a node environment to calculate the token
  protected urlConfig: IURLConfig;

  private version: number | string;
  private publicID: string;
  private extension: string;
  private signature: string;
  private signURL: boolean = null; // An internal flag indicating if sign() was called,
  private explicitAuthToken: string; // A pre-calculated authToken provided externally (is not calculated by the SDK)
  private suffix: string;
  private deliveryType: string; // type upload/private

  constructor(publicID: string, cloudConfig: ICloudConfig = {}, urlConfig?: IURLConfig) {
    this.setPublicID(publicID);
    this.setCloudConfig(cloudConfig);
    this.setURLConfig(urlConfig);
  }

  /**
   * @description Sets the URL Config for this asset
   * @param urlConfig
   * @return {this}
   */
  setURLConfig(urlConfig: IURLConfig): this {
    this.urlConfig = new URLConfig(urlConfig);
    return this;
  }

  /**
   * @description Sets the Cloud Config for this asset
   * @param cloudConfig
   * @return {this}
   */
  setCloudConfig(cloudConfig: ICloudConfig): this {
    this.cloudName = cloudConfig.cloudName;
    this.apiKey = cloudConfig.apiKey;
    this.apiSecret = cloudConfig.apiSecret;
    this.authToken = cloudConfig.authToken;
    return this;
  }

  /**
   * @description Sets the public ID of the asset.
   * @param {string} publicID The public ID of the asset.
   * @return {this}
   */
  setPublicID(publicID: string): this {
    // PublicID must be a string!
    this.publicID = publicID ? publicID.toString() : '';
    return this;
  }

  /**
   * @description Sets the delivery type of the asset.
   * @param {DELIVERY_TYPE | string} newType The type of the asset.
   * @return {this}
   */
  setDeliveryType(newType: DELIVERY_TYPE|string): this {
    this.deliveryType = newType;
    return this;
  }

  /**
   * @description Sets the URL SEO suffix of the asset.
   * @param {string} newSuffix The SEO suffix.
   * @return {this}
   */
  setSuffix(newSuffix: string): this {
    this.suffix = newSuffix;
    return this;
  }

  /**
   * @description Sets the signature of the asset.
   * @param {string} signature The signature.
   * @return {this}
   */
  setSignature(signature: string): this {
    this.signature = signature;
    return this;
  }

  /**
   * Sets the __cld_token__ value for the authToken signature
   * @param token
   */
  setExplicitAuthToken(token: string) {
    this.explicitAuthToken = token;
  }

  /**
   * @description Sets the version of the asset.
   * @param {string} newVersion The version of the asset.
   * @return {this}
   */
  setVersion(newVersion: number | string): this {
    if (newVersion) {
      this.version = newVersion;
    }
    return this;
  }

  /**
   * @description Sets the asset type.
   * @param {string} newType The type of the asset.
   * @return {this}
   */
  setAssetType(newType: 'key'|'image'|'video'|'raw'|'auto'|'all'|string): this {
    if (newType) {
      this.assetType = newType;
    }
    return this;
  }

  sign(val = true): this {
    this.signURL = val;
    return this;
  }

  /**
   * @description Serializes to URL string
   * @param overwriteOptions
   */
  toURL(overwriteOptions: {trackedAnalytics?: Partial<ITrackedPropertiesThroughAnalytics>} = {}): string {
    return this.createCloudinaryURL(null, overwriteOptions.trackedAnalytics);
  }

  /**
   * @description Validate various options before attempting to create a URL
   * The function will throw in case a violation
   * @throws Validation errors
   */
  validateAssetForURLCreation(): void {
    if (typeof this.cloudName === 'undefined') {
      throw 'You must supply a cloudName when initializing the asset';
    }

    const suffixContainsDot = this.suffix && this.suffix.indexOf('.') >= 0;
    const suffixContainsSlash = this.suffix && this.suffix.indexOf('/') >= 0;

    if (suffixContainsDot || suffixContainsSlash) {
      throw '`suffix`` should not include . or /';
    }

    // If the user requested to sign the URL, but the signature is empty, we throw
    if (this.signURL) {
      if (!this?.authToken && !this.signature && !this.explicitAuthToken) {
        throw 'Validation error - sign() was called but no signature or authToken were provided';
      }
    }
  }



  /**
   * @description return an SEO friendly name for a combination of asset/delivery, some examples:
   * * image/upload -> images
   * * video/upload -> videos
   * If no match is found, return `{asset}/{delivery}`
   */
  getResourceType(): string {
    const assetType = handleAssetType(this.assetType);
    const deliveryType = handleDeliveryType(this.deliveryType);

    const hasSuffix = !!this.suffix;
    const regularSEOType = `${assetType}/${deliveryType}`;
    const shortSEOType = SEO_TYPES[`${assetType}/${deliveryType}`];
    const useRootPath = this.urlConfig.useRootPath;
    const shorten = this.urlConfig.shorten;

    // Quick exit incase of useRootPath
    if (useRootPath) {
      if (regularSEOType === 'image/upload') {
        return ''; // For image/upload we're done, just return nothing
      } else {
        throw new Error(`useRootPath can only be used with assetType: 'image' and deliveryType: 'upload'. Provided: ${regularSEOType} instead`);
      }
    }

    if (shorten && regularSEOType === 'image/upload') {
      return 'iu';
    }


    if (hasSuffix) {
      if (shortSEOType) {
        return shortSEOType;
      } else {
        throw new Error(`URL Suffix only supported for ${Object.keys(SEO_TYPES).join(', ')}, Provided: ${regularSEOType} instead`);
      }
    }

    // If all else fails, return the regular image/upload combination (asset/delivery)
    return regularSEOType;
  }


  /**
   * Gets the signature of the URL
   * This function returns the signature only when sign() was called and there's no authToken set.
   */
  getSignature(): string {
    if (!this.signURL) { return; } // was sign() called? if not, skip this function
    if (this?.authToken?.acl) { return; } // Do we have an auth token config set with acl? if so, skip this function
    if (this.explicitAuthToken) { return; } // Do we have an explicit authToken set? if so, skip this function

    if (this.signURL && this.signature) {
      return `s--${this.signature}--`;
    } else {
      return '';
    }
  }

  /**
   * Gets the full query param for the authToken signature
   * - For client-side, this function uses the explicitAuthToken
   * - For server-side, this function calculates the authToken given the authToken config
   */
  getAuthTokenQuery(): string {
    if (!this.signURL) { return; }

    // Do we have an explicit authToken? if so, use it.
    if (this.explicitAuthToken) {
      return `__cld_token__=${this.explicitAuthToken}`;
    }

    // Do we have an authToken config? if so, use it.
    if (this.authToken) {
      // To be implemented, server-side calculation of the authToken.
    }
  }


  /**
   * Appends various query params to the URL encoded safe URL
   * @param safeURL
   * @param trackedAnalytics
   */
  appendQueryParamsToURL(safeURL: string, trackedAnalytics: Partial<ITrackedPropertiesThroughAnalytics>): string {
    const tokenAppendSymbol = this.publicID.includes('?') ? '&' : '?';


    let urlWithQuery = safeURL;

    // Try to append the authTokenQuery with a token symbol.
    // Note that the authToken might be empty and no query will be attached
    if (this.getAuthTokenQuery()) {
      urlWithQuery = [safeURL, this.getAuthTokenQuery()].join(tokenAppendSymbol);
    }

    // Check if the url already includes a query param.
    // TODO - note that we're checking the URL and publicID separately.
    //      - This is intended to replicate the existing behaviour, however it seems odd we are encoding the publicID
    const urlAlreadyIncludesQuery = urlWithQuery.includes('?') || this.publicID.includes('?');

    // urlConfig.analytics is true by default, has to be explicitly set to false to overwrite
    // Don't add analytics if the url already includes a '?'
    if (this.urlConfig.analytics !== false && !urlAlreadyIncludesQuery) {
      return `${urlWithQuery}?_a=${getSDKAnalyticsSignature(trackedAnalytics)}`;
    } else {
      return urlWithQuery;
    }
  }

  /**
   *
   * @description Creates a fully qualified CloudinaryURL
   * @return {string} CloudinaryURL
   * @throws Validation Errors
   */
  createCloudinaryURL(transformation?: Transformation | string, trackedAnalytics?: Partial<ITrackedPropertiesThroughAnalytics>): string {
    // In accordance with the existing implementation, if no publicID exists we should return nothing.
    if (!this.publicID) {
      return '';
    }

    // Throws if some options are mis-configured
    // See the function for more information on when it throws
    this.validateAssetForURLCreation();

    const prefix = getUrlPrefix(this.cloudName, this.urlConfig);
    const transformationString = transformation ? transformation.toString() : '';
    const version = getUrlVersion(this.publicID, this.version, this.urlConfig.forceVersion);

    const publicID = this.publicID
      // Serialize the publicID, but leave slashes alone.
      // we can't use serializeCloudinaryCharacters because that does both things (, and /)
      .replace(/,/g, '%2C');

    // Resource type is a mixture of assetType, deliveryType and various URL Configurations
    // Note how `suffix` changes both image/upload (resourceType) and also is appended at the end
    const url = [prefix, this.getResourceType(), this.getSignature(), transformationString, version, publicID, this.suffix]
      .filter((a) => a)
      .join('/');

    if (typeof transformation === 'string') {
      return url;
    } else {
      const safeURL = encodeURI(url)
        .replace(/\?/g, '%3F')
        .replace(/=/g, '%3D');
      return this.appendQueryParamsToURL(safeURL, trackedAnalytics);
    }
  }
}

export {CloudinaryFile};
