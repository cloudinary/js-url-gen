/**
 * @name ICloudinaryAssetConfigurations
 * @summary config
 * @description Defines the configuration needed for URL-related options when creating Cloudinary URL
 * @prop {string}  [cname]
 * @prop {boolean} [secureDistribution]
 * @prop {boolean} [privateCdn]
 * @prop {boolean} [signUrl]
 * @prop {boolean} [longUrlSignature]
 * @prop {boolean} [shorten]
 * @prop {boolean} [useRootPath]
 * @prop {boolean} [secure]
 * @prop {boolean} [forceVersion]
 * @prop {boolean} [analytics]
 */
interface IURLConfig {
  /**
   * Replace the asset domain when secure is false
   * http://{cname}/{cloudName}/image/upload
   */
  cname?: string;

  /**
   * Replace the asset domain when secure is true
   * https://{cname}/{cloudName}/image/upload
   */
  secureDistribution?: string;

  /**
   * When Cname or secureDistribution are provided (with secure accordingly),
   * privateCdn removes the cloudName from the URL:
   *
   * https://{cname|secureDistribution}/image/upload
   * instead of
   * * https://{cname|secureDistribution}/{cloudName}image/upload
   *
   * When privateCdn is provided without cname or secure distribution,
   * it moves the cloudName from the URL to the domain:
   *
   * https://{cloudName}-res.cloudinary.com/image/upload
   * instead of
   * https://res.cloudinary.com/{cloudName}/image/upload
   */
  privateCdn?: boolean;

  /**
   * use HTTPS or HTTP
   */
  secure?: boolean;


  /**
   * Whether or not to include the SDK version signature in the URL
   */
  analytics?: boolean;

  signUrl?: boolean;
  longUrlSignature?: boolean;
  shorten?: boolean;
  useRootPath?: boolean;
  forceVersion?: boolean;
}

export default IURLConfig;
