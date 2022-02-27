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
import {AuthUrl} from "../authentication/AuthUrl.js";
import CloudConfig from "../config/CloudConfig.js";

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
  protected cloudConfig: ICloudConfig;

  private version: number | string;
  private publicID: string;
  private extension: string;
  private signURL: boolean = null; // An internal flag indicating if sign() was called,
  private suffix: string;
  private deliveryType: string; // type upload/private
  private authURL: AuthUrl;

  constructor(publicID: string, cloudConfig: ICloudConfig = {}, urlConfig?: IURLConfig) {
    this.setPublicID(publicID);
    this.setCloudConfig(cloudConfig);
    this.setURLConfig(urlConfig);

    this.authURL = new AuthUrl(this.cloudConfig, this.urlConfig);
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
    this.cloudConfig = new CloudConfig(cloudConfig);
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
    this.authURL.setExplicitSignature(signature);
    return this;
  }

  /**
   * Sets the __cld_token__ value for the authToken signature
   * @param token
   * @return {this}
   */
  setExplicitAuthToken(token: string): this {
    this.authURL.setExplicitAuthToken(token);
    return this;
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
    this.authURL.sign(val);
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
      if (!this?.authToken && !this.authURL.getSignature() && !this.authURL.getAuthToken()) {
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

    // Quick exit in-case of useRootPath
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
   * @description Appends needed query params to the URL (Such as SDK Analytics and AuthToken)
   * @param {string} safeURL A URL that was previously url-encoded (and as such its url-safe)
   * @param {string} publicID The publicID of the request
   * @param trackedAnalytics
   */
  appendQueryParamsToURL(safeURL: string, publicID: string, trackedAnalytics: Partial<ITrackedPropertiesThroughAnalytics>): string {
    const urlInstance = new URL(safeURL);

    // Try to append the authTokenQuery with a token symbol.
    // Note that the authToken might be empty and no query will be attached
    if (this.authURL.getAuthToken()) {
      urlInstance.searchParams.append(this.authURL.getAuthTokenKey(), this.authURL.getAuthToken());
    }

    // urlConfig.analytics is true by default, has to be explicitly set to false to overwrite
    // Don't add analytics if the url already includes a query param
    if (this.urlConfig.analytics !== false && !urlInstance.search) {
      urlInstance.searchParams.append('_a', getSDKAnalyticsSignature(trackedAnalytics));

      return urlInstance.toString();
    } else {
      return urlInstance.toString();
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
    const url = [prefix, this.getResourceType(), this.authURL.getSignature(), transformationString, version, publicID, this.suffix]
      .filter((a) => a)
      .join('/');

    if (typeof transformation === 'string') {
      return url;
    } else {
      const safeURL = encodeURI(url)
        .replace(/\?/g, '%3F')
        .replace(/=/g, '%3D');

      // This check is needed because we replace in the original URL(and its publicID) ? with %3F.
      if (publicID.includes('?')) {
        return safeURL;
      } else {
        return `${this.appendQueryParamsToURL(safeURL, publicID, trackedAnalytics)}`;
      }
    }
  }
}

export {CloudinaryFile};
