import ICloudinaryConfigurations from "../config/interfaces/Config/ICloudinaryConfigurations";
import CloudinaryConfig from "../config/CloudinaryConfig";
import {IDescriptor} from "../config/interfaces/IDescriptor";
import {createCloudinaryURL} from "../internal/url/cloudinaryURL";

/**
 * @desc Cloudinary file without a transformation
 * @memberOf SDK
 */
class CloudinaryFile {
  public config: ICloudinaryConfigurations;
  public asset: IDescriptor;

  constructor(publicID: string) {
    this.asset = {
      publicID
    };
  }

  /**
   * for current instance
   * @param {ICloudinaryConfigurations} cloudinaryConfig
   */
  setConfig(cloudinaryConfig: ICloudinaryConfigurations): this {
    this.config = new CloudinaryConfig(cloudinaryConfig);
    return this;
  }

  setPublicID(publicID: string): this {
    this.asset.publicID = publicID;
    return this;
  }

  sign(): this {
    return this;
  }

  describeAsset(assetDescriptor: IDescriptor): this {
    Object.assign(this.asset, assetDescriptor);
    return this;
  }

  /**
   * @param version
   */
  setVersion(version:number): this {
    this.describeAsset({
      version
    });
    return this;
  }

  setAssetType(assetType: string): this {
    this.describeAsset({
      assetType
    });
    return this;
  }

  setStorageType(storageType: string): this {
    this.describeAsset({
      storageType
    });
    return this;
  }

  toURL(): string {
    return createCloudinaryURL(this.config, Object.assign({
      assetType: 'raw',
      storageType: 'upload'
    }, this.asset));
  }
}

export {CloudinaryFile};
