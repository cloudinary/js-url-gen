import {
  getUrlPrefix,
  getUrlVersion,
  handleAssetType,
  handleStorageType
} from "../internal/url/cloudinaryURL";
import {Transformation} from "../transformation/Transformation";
import ICloudConfig from "../config/interfaces/Config/ICloudConfig";
import IURLConfig from "../config/interfaces/Config/IURLConfig";
import IAuthTokenConfig from "../config/interfaces/Config/IAuthTokenConfig";
import URLConfig from "../config/URLConfig";

/**
 * @desc Cloudinary file without a transformation
 * @memberOf SDK
 */
class CloudinaryFile {
  protected assetType: string; // resourceType image/video, determined by the asset type
  protected cloudName: string; // populated from the cloud config
  protected apiKey: string; // populated from  the cloud config
  protected apiSecret: string; // populated from the cloud config
  protected authToken: IAuthTokenConfig; // populated from the cloud config
  protected urlConfig: IURLConfig;

  public version: number;
  public publicID: string;
  public extension: string;
  public suffix: string;
  public storageType: string; // type upload/private

  constructor(publicID: string, cloudConfig?: ICloudConfig, urlConfig?: IURLConfig) {
    this.publicID = publicID;
    this.cloudName = cloudConfig.cloudName;
    this.apiKey = cloudConfig.apiKey;
    this.apiSecret = cloudConfig.apiSecret;
    this.authToken = cloudConfig.authToken;
    this.urlConfig = new URLConfig(urlConfig);
  }

  setPublicID(publicID: string): this {
    this.publicID = publicID;
    return this;
  }

  sign(): this {
    return this;
  }

  toURL(): string {
    return this.createCloudinaryURL();
  }

  /**
   *
   * @description Creates a fully qualified CloudinaryURL
   * @return {string} CloudinaryURL
   */
  createCloudinaryURL(transformation?: Transformation): string {
    // config: ICloudinaryConfigurations, descriptor?: IDescriptor, transformation?: Transformation
    const prefix = getUrlPrefix(this.cloudName, this.urlConfig);
    const assetType = handleAssetType(this.assetType);
    const storageType = handleStorageType(this.storageType);

    const transformationString = transformation ? transformation.toString() : '';

    const version = getUrlVersion(this.publicID, this.version, this.urlConfig.forceVersion);

    const publicID = this.publicID
      // Serialize the publicID, but leave slashes alone.
      // we can't use serializeCloudinaryCharacters because that does both things (, and /)
      .replace(/,/g, '%2C');

    const url = [prefix, assetType, storageType, transformationString, version, publicID]
      .filter((a) => a)
      .join('/');

    return encodeURI(url)
      .replace(/\?/g, '%3F')
      .replace(/=/g, '%3D');
  }
}

export {CloudinaryFile};
